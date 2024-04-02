import { Component } from '@angular/core';

import { ActionComponent } from '../action/action.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'isdi-actions',
  standalone: true,
  imports: [ActionComponent, DisplayComponent],
  template: `
    <isdi-display />
    <div>
      @for (label of labels; track label) {
        <isdi-action [label]="label" />
      }
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `,
})
export class ActionsComponent {
  labels: ('Call' | 'Hang')[] = ['Call', 'Hang'];
}
