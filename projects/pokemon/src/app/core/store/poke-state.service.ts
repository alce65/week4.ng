import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StateStructure } from '../types/state';
import { ApiRepoService } from '../services/api-repo.service';
import { Pokemon } from '../models/pokemon';

const initialState: StateStructure = {
  count: 0,
  nextUrl: '',
  previousUrl: '',
  pokeData: [],
  fullPokeData: [],
  favorites: [],
};

@Injectable({
  providedIn: 'root',
})
export class PokeStateService {
  state$: BehaviorSubject<StateStructure>;

  constructor(
    // private repo: FetchApiRepoService
    private repo: ApiRepoService,
  ) {
    this.state$ = new BehaviorSubject<StateStructure>(initialState);

    this.repo.getAllPokemons().subscribe((data) => {
      this.state$.next(data);
    });
  }

  getState() {
    return this.state$.asObservable();
  }

  goPrevious() {
    const previousUrl = this.state$.value.previousUrl;
    if (!previousUrl) return;
    this.repo.getAllPokemons(previousUrl).subscribe((data) => {
      this.state$.next(data);
    });
  }

  goNext() {
    const nextUrl = this.state$.value.nextUrl;
    if (!nextUrl) return;
    this.repo.getAllPokemons(nextUrl).subscribe((data) => {
      this.state$.next(data);
    });
  }

  toggleFavorite(poke: Pokemon) {
    const favorites = this.state$.value.favorites;
    if (poke.isFavorite) {
      this.repo.addFavorite(poke).subscribe((poke) => {
        this.state$.next({
          ...this.state$.value,
          favorites: [...favorites, poke],
        });
      });
    } else {
      this.repo.removeFavorite(poke.id).subscribe((poke) => {
        const newFavorites = favorites.filter(
          (item) => Number(item.id) !== Number(poke.id),
        );
        const updatedPokes = this.state$.value.pokeData.map((item) => ({
          ...item,
          isFavorite:
            Number(item.id) === Number(poke.id) ? false : item.isFavorite,
        }));
        this.state$.next({
          ...this.state$.value,
          favorites: newFavorites,
          pokeData: updatedPokes,
        });
      });
    }
  }

  getPokeDetails(id: Pokemon['id']) {
    const pokeData = this.state$.value.fullPokeData.find(
      (item) => Number(item.id) === Number(id),
    );
    return pokeData;
  }
}