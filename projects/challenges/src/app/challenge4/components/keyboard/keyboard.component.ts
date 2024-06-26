import { Component } from '@angular/core';
import { KeyComponent } from '../key/key.component';

@Component({
  selector: 'isdi-keyboard',
  standalone: true,
  imports: [KeyComponent],
  template: `
    <ol class="keyboard">
      @for (key of keys; track $index) {
        <li>
          <isdi-key [label]="key" />
        </li>
      }
    </ol>
  `,
  styles: `
    :host {
      display: block;
    }
    .keyboard {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  `,
})
export class KeyboardComponent {
  keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'delete'];
}
