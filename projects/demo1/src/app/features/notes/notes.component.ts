import { Component } from '@angular/core';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@Component({
  selector: 'isdi-notes',
  standalone: true,
  imports: [NotesListComponent],
  template: ` <p>Notas</p>
    <isdi-notes-list />`,

  styles: ``,
})
export default class NotesComponent {}
