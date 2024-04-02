import { Component } from '@angular/core';
import { InfoComponent } from './components/info/info.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ActionsComponent } from './components/actions/actions.component';

@Component({
  selector: 'isdi-challenge4',
  standalone: true,
  imports: [InfoComponent, KeyboardComponent, ActionsComponent],
  template: `
    <div class="container">
      <!-- El siguiente elemento se oculta añadiéndole la clase "off" -->
      <isdi-info />

      <main class="phone">
        <isdi-keyboard />
        <isdi-actions />
      </main>
    </div>
  `,
  styles: `
    :host {
      display: block;
      background-color: #242424;
      color: #d2d2d2;
    }
    .container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .phone {
      display: grid;
      grid-template-columns: 300px 200px;
    }
  `,
})
export default class Challenge4Component {}
