import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Note } from '../../../../core/models/note';

@Component({
  selector: 'isdi-notes-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <input type="text" placeholder="Nueva nota" formControlName="title" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Nombre del autor"
          formControlName="author"
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
export class NotesAddComponent {
  @Output() addEvent: EventEmitter<Note> = new EventEmitter<Note>();
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: [''],
  });

  onSubmit() {
    const newNote: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...this.form.value,
    };
    this.addEvent.emit(newNote);
    this.form.reset();
  }
}
