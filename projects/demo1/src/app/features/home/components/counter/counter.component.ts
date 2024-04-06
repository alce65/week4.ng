import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'isdi-counter',
  standalone: true,
  imports: [],
  template: `
    <h3>Counter {{ index }}</h3>
    <div class="counter">
      <button (click)="onClick(-1)">➖</button>
      <span [class.red]="value < 0">{{ value }}</span>
      <button (click)="onClick(1)">➕</button>
    </div>
  `,
  styles: `
    .counter {
      display: flex;
      gap: 1rem;
    }
    .red {
      color: red;
    }
  `,
})
export class CounterComponent {
  @Input({ required: true }) index: string = '';
  value = 0;
  @Output() countEvent: EventEmitter<number> = new EventEmitter();

  onClick(value: number) {
    this.value += value;
    this.countEvent.emit(value);
  }
}
