import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../../core/models/task';

@Component({
  selector: 'isdi-todo-card',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="checkbox" [(ngModel)]="item.isDone" (change)="sendUpdate()" />
    <span>{{ item.title }}</span>
    <span>{{ item.owner }}</span>
    <span>
      <button type="button" (click)="sendDelete()">🗑️</button>
      <button type="button">✏️</button>
    </span>
  `,
  styles: `
    :host {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
  `,
})
export class TodoCardComponent {
  @Input({ required: true }) item!: Task;
  @Output() deleteEvent = new EventEmitter<Task['id']>();
  @Output() updateEvent = new EventEmitter<Task>();

  sendUpdate() {
    this.updateEvent.emit(this.item);
  }

  sendDelete() {
    this.deleteEvent.emit(this.item.id);
  }
}
