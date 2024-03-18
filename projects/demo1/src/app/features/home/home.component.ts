import { Component } from '@angular/core';
import { GreetingsComponent } from './components/greetings/greetings.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [GreetingsComponent],
  template: `
    <div>
      <h2>home</h2>
      <p>Futura página home</p>
      <isdi-greetings />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
