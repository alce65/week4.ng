import { Component, Input } from '@angular/core';
import { Gentleman } from '../../model/gentleman';

@Component({
  selector: 'isdi-info',
  standalone: true,
  imports: [],
  template: `
    <p class="info">
      {{ selectedGentlemen().length }}
      gentlemen pointing at you
    </p>
  `,
  styles: ``,
})
export class InfoComponent {
  @Input() selectedGentlemen!: () => Gentleman[];
}
