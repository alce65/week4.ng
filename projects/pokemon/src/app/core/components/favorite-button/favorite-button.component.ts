import { Component, inject, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokeStateService } from '../../store/poke-state.service';

@Component({
  selector: 'isdi-favorite-button',
  standalone: true,
  imports: [],
  template: `
    <span class="fav-icon" (click)="onFav()" (keyup)="onFav()" tabindex="0">
      <i
        role="button"
        class="icon--score
            {{ this.poke.isFavorite ? 'fas' : 'far' }}
            fa-heart"
        [class.favorite]="this.poke.isFavorite"
      ></i>
    </span>
  `,
  styles: `
    .fav-icon {
      font-size: 1.3rem;
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      padding-top: 0.2rem;
      padding-right: 0.2rem;
      cursor: pointer;
    }

    .favorite {
      color: var(--color_favorite);
    }
  `,
})
export class FavoriteButtonComponent {
  @Input({ required: true }) poke!: Pokemon;
  private stateSrv = inject(PokeStateService);

  onFav() {
    this.poke.isFavorite = !this.poke.isFavorite;
    console.log(this.poke);
    this.stateSrv.toggleFavorite(this.poke);
  }
}
