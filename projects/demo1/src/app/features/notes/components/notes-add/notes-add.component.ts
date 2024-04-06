import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Note } from '../../../../core/models/note';
import { NotesStoreService } from '../../services/store.service';

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
  @Input() details!: HTMLDetailsElement;
  private fb = inject(FormBuilder);
  private storeSrv = inject(NotesStoreService);

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

    this.storeSrv.addNota(newNote);
    this.form.reset();
    this.details.open = false;
  }
}
