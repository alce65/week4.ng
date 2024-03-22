import { Component } from '@angular/core';

import { ActionComponent } from '../action/action.component';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'isdi-actions',
  standalone: true,
  imports: [ActionComponent, DisplayComponent],
  template: `
    <isdi-display />
    @for (label of labels; track label) {
      <isdi-action [label]="label" />
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  `,
})
export class ActionsComponent {
  labels: ('Call' | 'Hang')[] = ['Call', 'Hang'];
}
