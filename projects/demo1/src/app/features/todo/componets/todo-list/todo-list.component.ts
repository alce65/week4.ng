import { Component } from '@angular/core';
import { Task } from '../../../../core/models/task';
import { getTasks } from '../../../../core/data';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'isdi-todo-list',
  standalone: true,
  imports: [TodoCardComponent],
  template: `
    <p>todo-list works!</p>
    <ul>
      @for (item of tasks; track item.id) {
        <isdi-todo-card
          [item]="item"
          (deleteEvent)="onDelete($event)"
          (updateEvent)="onUpdate($event)"
        />
      }
    </ul>
  `,
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
})
export class TodoListComponent {
  tasks: Task[] = [];
  constructor() {
    this.onLoad();
  }

  onLoad() {
    getTasks().then((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

  onUpdate(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    console.log(this.tasks);
  }

  onDelete(id: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
