import { Component } from '@angular/core';
import { FavListComponent } from './fav-list/fav-list.component';

@Component({
  selector: 'isdi-favorites',
  standalone: true,
  imports: [FavListComponent],
  template: ` <isdi-fav-list /> `,
  styles: `
    :host {
      width: 100%;
      max-width: 700px;
      margin-bottom: 3rem;
    }
  `,
})
export default class FavoritesComponent {}
