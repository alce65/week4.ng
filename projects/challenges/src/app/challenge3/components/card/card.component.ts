import { Component, Input } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [],
  template: `
    <img
      src="assets/got/{{ item.name.toLowerCase() }}.jpg"
      alt="Foto de {{ item.name }} {{ item.house }}"
      class="character__picture card-img-top"
      [class.character__picture-rotate]="!item.isAlive"
    />
    <div class="card-body">
      <h2 class="character__name card-title h4">
        {{ item.name }} {{ item.house }}
      </h2>
      <div class="character__info">
        <ul class="list-unstyled">
          <li>Edad: {{ item.age }} años</li>
          <li>
            Estado:
            <span class="character__status">
              @if (item.isAlive) {
                <i class="fas fa-thumbs-up"></i>
              } @else {
                <i class="fas fa-thumbs-down"></i>
              }
            </span>
          </li>
        </ul>
      </div>
    </div>
    <i class="emoji">{{ emojis[item.type] }} </i>
  `,
  styles: `
    :host {
      flex-basis: auto;
      flex-grow: 0;
      display: block;
      border: none;
      background-color: #331c0e;
      color: #fff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
    .character__picture {
      object-fit: cover;
      object-position: top;
      height: 200px;
    }

    .character__picture-rotate {
      transform: rotate(180deg);
    }

    .character__name {
      height: 60px;
    }

    .emoji {
      font-style: normal;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  `,
})
export class CardComponent {
  @Input({ required: true }) item!: Character;

  emojis: { [key: string]: string } = {
    king: '👑',
    fighter: '⚔️',
    counselor: '📜',
    squire: '🛡️',
  };
}
