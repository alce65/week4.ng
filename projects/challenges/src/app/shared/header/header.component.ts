import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header class="app-header">
      <h1>{{ title }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    .app-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 15vh;
      min-width: 480px;

      padding-inline: 2rem;

      @media (width > 800px) {
        flex-direction: row;
        min-height: 10vh;
        justify-content: space-between;
      }
    }
  `,
})
export class HeaderComponent {
  @Input() title: string = '';
}
