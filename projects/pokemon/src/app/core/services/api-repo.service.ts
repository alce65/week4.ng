import { Inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, mergeMap, Observable, zip, of } from 'rxjs';
import { StateStructure } from '../types/state';
import { Pokemon, PokemonDetails, PokemonResponse } from '../models/pokemon';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URLS, ApiUrls } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class ApiRepoService {
  pokeUrl: string;
  privateUrl: string;
  constructor(
    @Inject(API_URLS) private urls: ApiUrls,
    private http: HttpClient,
  ) {
    this.pokeUrl = this.initialPokeUrl;
    this.privateUrl = this.urls.privateUrl;
  }

  get initialPokeUrl() {
    const offset = 0;
    const limit = 20;
    return `${this.urls.pokeUrl}/pokemon?limit=${limit}&offset=${offset}`;
  }

  getAllPokemons(url?: string) {
    return this.http.get<PokemonResponse>(url || this.pokeUrl).pipe(
      mergeMap((data) => {
        console.log(data);

        const allDetails: Observable<PokemonDetails>[] = data.results.map(
          (poke) => this.getPokemonDetails(poke.url),
        );

        const fullValues$ = forkJoin(allDetails);

        const favorites$ = this.getFavoritePokemons();

        console.log('Fav', favorites$);

        const values$ = fullValues$.pipe(
          map((values) =>
            values.map((item) => ({
              id: item.id,
              height: item.height,
              weight: item.weight,
              sprites: item.sprites,
            })),
          ),
        );

        console.log('Values', values$);

        const fullValues = zip(fullValues$, values$, favorites$);

        console.log('Full', fullValues);

        return fullValues.pipe(
          map(([full, values, favorites]) => {
            const result: StateStructure = {
              count: data.count,
              nextUrl: data.next,
              previousUrl: data.previous,
              pokeData: data.results.map((poke, index) => ({
                ...poke,
                ...values[index],
                isFavorite: favorites.some(
                  (fav) => fav.id === values[index].id,
                ),
              })),
              fullPokeData: full,
              favorites: favorites,
            };
            console.log(result);
            return result;
          }),
        );
      }),
      // mergeAll(),
    );
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }

  getFavoritePokemons() {
    return this.http.get<Pokemon[]>(this.privateUrl).pipe(
      map((data) => data.map((data) => ({ ...data, id: +data.id }))),
      catchError((err: HttpErrorResponse) => {
        console.error('PokeFavorites', err.message);
        return of([]);
      }),
    );
  }

  addFavorite(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post(this.privateUrl, {
      ...pokemon,
      id: pokemon.id.toString(),
    }) as Observable<Pokemon>;
  }

  removeFavorite(id: number): Observable<Pokemon> {
    return this.http.delete(`${this.privateUrl}/${id}`) as Observable<Pokemon>;
  }
}
