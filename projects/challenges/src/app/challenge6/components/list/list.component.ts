import { Component, inject } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'isdi-list',
  standalone: true,
  imports: [ItemComponent],
  template: `
    <div class="list-container">
      @for (pet of petsService.petState(); track $index) {
        <isdi-item [pet]="pet"></isdi-item>
      }
    </div>
  `,
  styles: ``,
})
export class ListComponent {
  petsService = inject(PetsService);
}
