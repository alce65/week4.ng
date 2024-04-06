import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../../../core/models/note';
import { repo } from '../../../core/data';
import { StorageService } from '../../../core/services/storage.service';

type NotesState = {
  notes: Note[];
};

@Injectable({
  providedIn: 'root',
})
export class NotesStoreService {
  private state$: BehaviorSubject<NotesState>;
  public storageSrv = inject(StorageService<Note>);

  constructor() {
    this.state$ = new BehaviorSubject({
      notes: [] as Note[],
    });
  }

  getState(): Observable<NotesState> {
    return this.state$.asObservable();
  }

  loadNotes(): void {
    const notes = this.storageSrv.getStorage();
    if (notes.length === 0) {
      repo.getNotes().then((notes) => {
        this.storageSrv.setStorage(notes);
      });
    }
    const state: NotesState = { notes: notes };
    this.state$.next(state);
  }

  addNota(note: Note): void {
    const state: NotesState = { notes: [...this.state$.value.notes, note] };
    this.storageSrv.setStorage(state.notes);
    this.state$.next(state);
  }

  removeNota(id: Note['id']): void {
    const state: NotesState = {
      notes: this.state$.value.notes.filter((note) => note.id !== id),
    };
    this.storageSrv.setStorage(state.notes);
    this.state$.next(state);
  }

  updateNota(note: Note): void {
    const notes = this.state$.value.notes;
    const newNotes = notes.map((t) => (t.id === note.id ? note : t));
    const state: NotesState = { notes: newNotes };
    this.storageSrv.setStorage(newNotes);
    this.state$.next(state);
  }
}
