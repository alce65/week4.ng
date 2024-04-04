import { Component } from '@angular/core';
import { GreetingsComponent } from './components/greetings/greetings.component';
import { CountersListComponent } from './components/counters-list/counters-list.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent, CountersListComponent],
  template: `
    <p>App component</p>

    <nav>
      @for (page of pages; track $index) {
        <button (click)="selectPage(page)">{{ page }}</button>
      }
    </nav>

    <nav>
      @for (page of pages; track $index) {
        <button (click)="currentPage = page">{{ page }}</button>
      }
    </nav>

    <div>
      <h2>home</h2>
      @if (currentPage === 'Greetings') {
        <isdi-greetings />
      } @else {
        <isdi-counters-list />
      }
    </div>
  `,
  styles: ``,
})
export default class HomeComponent {
  pages: string[] = ['Greetings', 'Counter'];
  currentPage: string = 'Greetings';

  selectPage(page: string) {
    this.currentPage = page;
  }
}
