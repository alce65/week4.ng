import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-button-all',
  standalone: true,
  imports: [],
  template: ` <button class="button button--select" (click)="selectAll()">
    Select all
  </button>`,
  styles: ``,
})
export class ButtonAllComponent {
  @Input() selectAll!: () => void;
}
