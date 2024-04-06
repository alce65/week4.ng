import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Task } from '../../../../core/models/task';
import { repo } from '../../../../core/data';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { StorageService } from '../../../../core/services/storage.service';

@Component({
  selector: 'isdi-todo-list',
  standalone: true,
  imports: [TodoCardComponent, TodoAddComponent],
  template: `
    <details #details>
      <summary>Añadir tarea</summary>
      <isdi-todo-add (addEvent)="onAdd($event)" />
    </details>

    <ul>
      @for (item of tasks; track item.id) {
        <li>
          <isdi-todo-card
            [item]="item"
            (deleteEvent)="onDelete($event)"
            (updateEvent)="onUpdate($event)"
          />
        </li>
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
  @ViewChild('details', { static: true }) details!: ElementRef;

  public storageSrv = inject(StorageService<Task>);

  constructor() {
    this.onLoad();
  }

  onLoad() {
    this.tasks = this.storageSrv.getStorage();
    if (this.tasks.length === 0) {
      repo.getTasks().then((tasks) => {
        this.tasks = tasks;
        this.storageSrv.setStorage(this.tasks);
      });
    }
  }

  onUpdate(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
    this.storageSrv.setStorage(this.tasks);
  }

  onDelete(id: Task['id']) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.storageSrv.setStorage(this.tasks);
  }

  onAdd(task: Task) {
    this.details.nativeElement.open = false;
    this.tasks = [...this.tasks, task];
    this.storageSrv.setStorage(this.tasks);
  }
}
