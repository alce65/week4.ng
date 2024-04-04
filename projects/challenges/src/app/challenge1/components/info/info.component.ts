import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-info',
  standalone: true,
  imports: [],
  template: `
    <p class="info">
      {{ selectedGentlemenLength }}
      gentlemen pointing at you
    </p>
  `,
  styles: ``,
})
export class InfoComponent {
  @Input({ required: true }) selectedGentlemenLength!: number;
}
