import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'isdi-card-back',
  standalone: true,
  imports: [],
  template: ` <div class="character__overlay">
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
  </div>`,
  styles: `
    :host {
      display: block;
      position: relative;
      border: none;
      background-color: #331c0e;
      color: #fff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
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

    isdi-card:nth-child(even) + isdi-card-back > .character__overlay {
      top: 100%;
    }

    isdi-card:hover + isdi-card-back > .character__overlay {
      opacity: 1;
      pointer-events: all;
      top: 0;
    }

    // isdi-card:hover + isdi-card-back >
    .character__actions {
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
  `,
})
export class CardBackComponent {
  @Input({ required: true }) item!: Character;
  @Output() talkEvent: EventEmitter<Character> = new EventEmitter();
  @Output() killEvent: EventEmitter<Character> = new EventEmitter();

  sendTalk() {
    this.talkEvent.emit(this.item);
  }
  sendKill() {
    this.killEvent.emit(this.item);
  }
}
