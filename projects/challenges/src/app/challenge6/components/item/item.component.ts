import { Component, input } from '@angular/core';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'isdi-item',
  standalone: true,
  imports: [],
  template: `
    <p>Id: {{ pet().id }}</p>
    <p>Name: {{ pet().name }}</p>
    <p>Breed: {{ pet().breed }}</p>
    <p>Caregiver:{{ pet().careGiver }}</p>
    <img src="{{ pet().imageUrl }}" alt="pet image" />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `,
})
export class ItemComponent {
  pet = input<Pet>({} as Pet);
}
