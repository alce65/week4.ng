import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      <div class="character__overlay">
        <ul class="list-unstyled">
          @switch (item.type) {
            @case ('king') {
              <li>Años de reinado: {{ item.kingdomYears }}</li>
            }
            @case ('fighter') {
              <li>Arma: {{ item.weapon }}</li>
              <li>Destreza: {{ item.skillsRange }}</li>
            }
            @case ('counselor') {
              <li>Asesora a: {{ item.lord?.name }}</li>
            }
            @case ('squire') {
              <li>Peloteo: {{ item.serverRange }}</li>
              <li>Sirve a: {{ item.master?.name }}</li>
            }
          }
        </ul>
        <div class="character__actions">
          <button class="character__action btn talk" (click)="sendTalk()">
            habla
          </button>
          <button
            class="character__action btn kill"
            (click)="sendKill()"
            [disabled]="!item.isAlive"
          >
            muere
          </button>
        </div>
      </div>
    </div>
    <i class="emoji">{{ emojis[item.type] }} </i>
  `,
  styles: `
    :host {
      flex-basis: auto;
      flex-grow: 0;
      display: block;
      position: relative;
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

    .character__overlay {
      border-radius: 0.25rem;
      position: absolute;
      padding: 25px 15px;
      top: -100%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s;
    }
    :host:nth-child(even) .character__overlay {
      top: 100%;
    }

    :host:hover .character__overlay {
      opacity: 1;
      pointer-events: all;
      top: 0;
    }

    :host:hover .character__actions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 90px;
    }

    .character__action {
      background-color: #67331e;
      color: #fff;
      width: 80%;
    }

    .emoji {
      font-style: normal;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  `,
})
export class CardComponent {
  @Input({ required: true }) item!: Character;
  @Output() talkEvent: EventEmitter<Character> = new EventEmitter();
  @Output() killEvent: EventEmitter<Character> = new EventEmitter();

  emojis: { [key: string]: string } = {
    king: '👑',
    fighter: '⚔️',
    counselor: '📜',
    squire: '🛡️',
  };

  sendTalk() {
    this.talkEvent.emit(this.item);
  }
  sendKill() {
    this.killEvent.emit(this.item);
  }
}
