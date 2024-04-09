import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../core/models/pokemon';
import { RouterModule } from '@angular/router';
import { FavoriteButtonComponent } from '../../../core/components/favorite-button/favorite-button.component';

// Link  '?origin=home'

@Component({
  selector: 'isdi-poke-item',
  standalone: true,
  imports: [RouterModule, FavoriteButtonComponent],
  template: `
    <a class="poke-item__link" [routerLink]="['/details/', poke.id]">
      <div class="poke-item__header">
        <h3 class="poke-item__link-label">{{ this.poke.name }}</h3>
        <span class="poke-item__link-sprite">
          <img
            class="poke-item__link-sprite-front"
            src="{{ this.poke.sprites.front_default }}"
            alt="{{ this.poke.name }}"
          />
          <img
            class="poke-item__link-sprite-back"
            src="{{ this.poke.sprites.back_default }}"
            alt="{{ this.poke.name }}"
          />
        </span>
      </div>
      <div class="poke-item__data">
        <span>Altura: {{ this.poke.height }} cm</span>
        <span
          >Peso:
          {{
            this.poke.weight < 1000
              ? this.poke.weight + ' g'
              : this.poke.weight / 1000 + ' kg'
          }}</span
        >
      </div>
    </a>
    <isdi-favorite-button [poke]="poke" />
  `,
  styles: `
    :host {
      display: block;
      border: 2px solid var(--color_background_secondary);
      padding-left: 0.2rem;
      position: relative;
      height: 100%;
    }
    .poke-item__link {
      font-size: 1.2rem;
      text-decoration: none;
      color: var(--color_secondary);
      display: flex;
      flex-direction: column;

      .poke-item__header {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .poke-item__data {
        padding-inline: 0.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .poke-item__link-label {
      text-transform: capitalize;
    }

    .poke-item__link-sprite {
      position: relative;
    }

    .poke-item__link-sprite-back {
      position: absolute;
      left: 0;
      backface-visibility: hidden;
      transform: rotateY(180deg);
      z-index: 101;
    }

    .poke-item__link-sprite:hover .poke-item__link-sprite-front {
      transform: rotateY(180deg);
    }

    .poke-item__link-sprite:hover .poke-item__link-sprite-back {
      transform: rotateY(0deg);
    }

    .poke-item__link-sprite-front,
    .poke-item__link-sprite-back {
      transition: 1s;
    }
  `,
})
export class PokeItemComponent {
  @Input({ required: true }) poke!: Pokemon;
}
