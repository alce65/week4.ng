import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CardComponent } from '../card/card.component';
import { getCharacters } from '../../data';
import { TalkComponent } from '../talk/talk.component';
import { CardBackComponent } from '../card-back/card-back.component';

@Component({
  selector: 'isdi-got',
  standalone: true,
  imports: [CardComponent, CardBackComponent, TalkComponent],
  template: `
    <div class="app container">
      <h1>Game of Thrones</h1>
      <ul class="characters-list row list-unstyled">
        @for (item of characters; track $index) {
          <li class="character col">
            <isdi-card [item]="item"></isdi-card>
            <isdi-card-back
              [item]="item"
              (killEvent)="onKill($event)"
              (talkEvent)="onTalk($event)"
            />
          </li>
        }
      </ul>
    </div>
    <isdi-talk [character]="currentCharacter" />
  `,
  styles: `
    .app {
      margin: 20px;
    }
    h1 {
      color: #333;
    }
    .characters-list {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      min-height: 100vh;
      align-items: center;
      justify-content: space-between;
    }
    .character {
      position: relative;
    }
  `,
})
export class GotComponent implements OnInit {
  characters: Character[] = [];
  currentCharacter: Character | null = null;

  ngOnInit(): void {
    getCharacters().then((characters) => {
      this.characters = characters;
    });
  }
  onTalk(character: Character) {
    console.log('Talk', character);
    this.currentCharacter = character;
    setTimeout(() => {
      console.log('Talk Stop');
      this.currentCharacter = null;
    }, 2000);
  }
  onKill(character: Character) {
    this.characters = this.characters.map((c) =>
      c.name === character.name ? { ...c, isAlive: false } : c,
    );
  }
}
