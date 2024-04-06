import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../../../core/models/task';

@Component({
  selector: 'isdi-todo-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <input type="text" placeholder="Nueva tarea" formControlName="title" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre del responsable"
          formControlName="owner"
        />
      </div>
      <button type="submit" [disabled]="form.invalid">Add</button>
    </form>
  `,
  styles: `
    div {
      padding: 0.6rem 0;
    }
  `,
})
export class TodoAddComponent {
  @Output() addEvent: EventEmitter<Task> = new EventEmitter<Task>();
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    owner: [''],
  });

  onSubmit() {
    const newTask: Task = {
      id: crypto.randomUUID(),
      isDone: false,
      ...this.form.value,
    };
    this.addEvent.emit(newTask);
    this.form.reset();
  }
}
