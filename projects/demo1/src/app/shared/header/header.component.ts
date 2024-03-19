import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>{{ title }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    header {
      background-color: #f2f2f2;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
