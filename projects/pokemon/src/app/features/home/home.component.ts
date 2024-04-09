import { Component } from '@angular/core';
import { PokeListComponent } from './poke-list/poke-list.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [PokeListComponent],
  template: `<isdi-poke-list />`,
  styles: `
    :host {
      width: 100%;
      max-width: 700px;
      margin-bottom: 3rem;
    }
  `,
})
export default class HomeComponent {}
