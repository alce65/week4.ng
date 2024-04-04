import { Component, Input } from '@angular/core';
import { Character } from '../../model/character';

@Component({
  selector: 'isdi-talk',
  standalone: true,
  imports: [],
  template: `
    <div class="communications" [class.on]="character">
      @if (character) {
        <p class="communications__text display-1">{{ character.message }}</p>
        <img
          class="communications__picture"
          src="assets/got/{{ character.name.toLowerCase() }}.jpg"
          alt="Foto de {{ character.name }} {{ character.house }}"
        />
      }
    </div>
  `,
  styles: `
    .communications {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparent;
      padding: 0 100px;
      display: flex;
      align-items: center;
      transition: all 0.3s;
      right: 100vw;
      left: -100vw;
    }
    .communications.on {
      right: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 1);
    }
    .communications__picture {
      width: 200px;
      position: absolute;
      right: 2rem;
      bottom: 2rem;
    }
  `,
})
export class TalkComponent {
  @Input({ required: true }) character!: Character | null;
}
