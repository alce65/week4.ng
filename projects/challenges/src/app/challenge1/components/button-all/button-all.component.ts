import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() selectAllEvent: EventEmitter<void> = new EventEmitter<void>();

  selectAll() {
    this.selectAllEvent.emit();
  }
}
