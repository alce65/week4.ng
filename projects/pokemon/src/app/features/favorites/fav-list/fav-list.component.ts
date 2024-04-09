import { Component, inject } from '@angular/core';
import { PokeStateService } from '../../../core/store/poke-state.service';
import { PokeItemComponent } from '../../home/poke-item/poke-item.component';
import { AsyncPipe } from '@angular/common';
import { Pokemon } from '../../../core/models/pokemon';

@Component({
  selector: 'isdi-fav-list',
  standalone: true,
  imports: [PokeItemComponent, AsyncPipe],
  template: `
    @if (state$ | async; as state) {
      <h2>Pokemons Favoritos</h2>
      <ul class="poke-list">
        @for (poke of state.favorites.sort(sortPokemon); track poke.id) {
          <li>
            <isdi-poke-item [poke]="poke" />
          </li>
        }
      </ul>
    }
  `,
  styles: `
    .poke-list {
      display: grid;
      gap: 1rem;
      grid-auto-rows: 10rem;
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
      list-style: none;
    }
  `,
})
export class FavListComponent {
  private stateSrv = inject(PokeStateService);
  state$ = this.stateSrv.getState();

  sortPokemon(a: Pokemon, b: Pokemon) {
    return a.id - b.id;
  }
}
