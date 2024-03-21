import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'isdi-card-back',
  standalone: true,
  imports: [],
  template: `
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
  `,
  styles: `
    :host {
      display: block;
      border: none;
      background-color: #331c0e;
      color: #fff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      position: absolute;
      top: -100%;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      padding: 0.2rem;
      transition: all 0.2s;
    }
    .character__overlay {
      height: 100%;
      border-radius: 0.25rem;
      padding: 25px 15px;
      background-color: rgba(0, 0, 0, 0.9);
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    li:nth-child(even) .character__overlay {
      top: 100%;
    }

    li:hover :host {
      opacity: 1;
      pointer-events: all;
      top: 0;
    }

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
      cursor: pointer;
    }
  `,
})
export class CardBackComponent {
  @Input({ required: true }) item!: Character;
  @Output() talkEvent: EventEmitter<Character> = new EventEmitter();
  @Output() killEvent: EventEmitter<Character> = new EventEmitter();

  sendTalk() {
    console.log('Talk', this.item);
    this.talkEvent.emit(this.item);
  }
  sendKill() {
    console.log('Kill', this.item);
    this.killEvent.emit(this.item);
  }
}
