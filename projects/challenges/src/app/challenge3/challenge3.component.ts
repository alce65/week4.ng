import { Component } from '@angular/core';
import { GotComponent } from './components/got/got.component';
import { MainContainerComponent } from '../shared/main-container/main-container.component';

@Component({
  selector: 'isdi-challenge3',
  standalone: true,
  imports: [GotComponent, MainContainerComponent],
  template: `
    <isdi-main-container>
      <isdi-got />
    </isdi-main-container>
  `,
  styles: `
    :host {
      display: block;
      background-color: #b9540c;
      overflow: hidden;
    }
  `,
})
export default class Challenge3Component {}
