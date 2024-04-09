import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'isdi-pagination',
  standalone: true,
  imports: [],
  template: `
    <button
      [class.isHidden]="!hasPrev"
      type="button"
      (click)="pageEvent.next('prev')"
    >
      <i class="fas fa-backward"></i>
      <span>Anterior</span>
    </button>
    <button
      [class.isHidden]="!hasNext"
      type="button"
      (click)="pageEvent.next('next')"
    >
      <span>Siguiente</span>
      <i class="fas fa-forward"></i>
    </button>
  `,
  styles: `
    :host {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
    }
    button {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-inline: 1rem;
      height: 3rem;
      font-size: 1.2rem;

      &.isHidden {
        visibility: hidden;
      }
    }
  `,
})
export class PaginationComponent {
  @Input() hasNext: boolean = true;
  @Input() hasPrev: boolean = true;
  @Output() pageEvent = new EventEmitter<'prev' | 'next'>();
}
