import { Component } from '@angular/core';

@Component({
  selector: 'isdi-main-container',
  standalone: true,
  imports: [],
  template: `
    <div class="main-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .main-container {
      padding-inline: 2rem;
    }
  `,
})
export class MainContainerComponent {}
