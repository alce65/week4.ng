import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { Pokemon } from '../../core/models/pokemon';

@Component({
  selector: 'isdi-details',
  standalone: true,
  imports: [PokeDetailsComponent],
  template: ` <isdi-poke-details [pokeId]="id" /> `,
  styles: ``,
})
export default class DetailsComponent {
  id!: Pokemon['id'];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.id = Number(id);
    });
  }
}
