import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Note } from '../../../../core/models/note';
import { NotesCardComponent } from '../notes-card/notes-card.component';
import { NotesAddComponent } from '../notes-add/notes-add.component';
import { NotesStoreService } from '../../services/store.service';

@Component({
  selector: 'isdi-notes-list',
  standalone: true,
  imports: [NotesCardComponent, NotesAddComponent],
  providers: [
    NotesStoreService,
    {
      provide: 'NOTES_STORE',
      useValue: 'Notes',
    },
  ],

  template: `
    <details #details>
      <summary>Añadir nota</summary>
      <isdi-notes-add (addEvent)="onAdd($event)" />
    </details>

    <ul>
      @for (item of notes; track item.id) {
        <li>
          <isdi-notes-card [item]="item" />
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
export class NotesListComponent {
  notes: Note[] = [];
  @ViewChild('details', { static: true }) details!: ElementRef;

  storeSrv = inject(NotesStoreService);

  constructor() {
    this.storeSrv.getState().subscribe((state) => {
      this.notes = state.notas;
    });

    this.storeSrv.loadNotes();
  }

  onAdd(note: Note) {
    this.details.nativeElement.open = false;
    this.storeSrv.addNota(note);
  }
}
