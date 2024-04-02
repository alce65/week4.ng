import { Component, inject } from '@angular/core';
import { NotesCardComponent } from '../notes-card/notes-card.component';
import { NotesAddComponent } from '../notes-add/notes-add.component';
import { NotesStoreService } from '../../services/store.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'isdi-notes-list',
  standalone: true,
  imports: [NotesCardComponent, NotesAddComponent, AsyncPipe],
  providers: [
    NotesStoreService,
    // {
    //   provide: 'NOTES_STORE',
    //   useValue: 'Notes',
    // },
  ],

  template: `
    @if ((storeSrv.getState() | async)!.notes; as notes) {
      <details #details>
        <summary>Añadir nota número {{ notes.length + 1 }}</summary>
        <isdi-notes-add [details]="details" />
      </details>

      <ul>
        @for (item of notes; track item.id) {
          <li>
            <isdi-notes-card [item]="item" />
          </li>
        }
      </ul>
    }
  `,
  styles: `
    ul {
      list-style-type: none;
      padding: 0;
    }
  `,
})
export class NotesListComponent {
  // notes: Note[] = [];
  storeSrv = inject(NotesStoreService);

  constructor() {
    // this.storeSrv.getState().subscribe((state) => {
    //   this.notes = state.notes;
    // });
    this.storeSrv.loadNotes();
    // ;
  }
}
