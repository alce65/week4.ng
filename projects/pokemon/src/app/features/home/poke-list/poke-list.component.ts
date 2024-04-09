import { Component, inject } from '@angular/core';
import { StateStructure } from '../../../core/types/state';
import { PokeItemComponent } from '../poke-item/poke-item.component';
import { PokeStateService } from '../../../core/store/poke-state.service';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'isdi-poke-list',
  standalone: true,
  imports: [PokeItemComponent, PaginationComponent, AsyncPipe],
  template: `
    @if (state$ | async; as state) {
      <h2>Lista de Pokemons ({{ paginationText(state) }})</h2>
      <ul class="poke-list">
        @for (poke of state.pokeData; track poke.id) {
          <li>
            <isdi-poke-item [poke]="poke" />
          </li>
        }
      </ul>
      <isdi-pagination
        [hasNext]="state.nextUrl !== null"
        [hasPrev]="state.previousUrl !== null"
        (pageEvent)="onPagination($event)"
      />
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
export class PokeListComponent {
  private stateSrv = inject(PokeStateService);
  state$ = this.stateSrv.getState();

  paginationText({ count, nextUrl }: StateStructure) {
    const final = nextUrl ? nextUrl.split('=')[1].split('&')[0] : count;
    const initial = Number(final) - 19;
    return `${initial} - ${final} / ${count}`;
  }

  onPagination(target: 'prev' | 'next') {
    target === 'prev' ? this.stateSrv.goPrevious() : this.stateSrv.goNext();
    scrollTo(0, 0);
  }
}
