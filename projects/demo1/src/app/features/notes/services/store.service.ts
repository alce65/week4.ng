import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../../../core/models/note';
import { getNotes } from '../../../core/data';
import { StorageService } from '../../../core/services/storage.service';

type NotasState = {
  notas: Note[];
};

@Injectable({
  providedIn: 'root',
})
export class NotesStoreService {
  private state$: BehaviorSubject<NotasState>;
  public storageSrv = inject(StorageService<Note>);

  constructor() {
    this.state$ = new BehaviorSubject({
      notas: [] as Note[],
    });
  }

  getState(): Observable<NotasState> {
    return this.state$.asObservable();
  }

  loadNotes(): void {
    const notes = this.storageSrv.getStorage();
    if (notes.length === 0) {
      getNotes().then((notes) => {
        this.storageSrv.setStorage(notes);
      });
    }
    this.state$.next({ notas: notes });
  }

  addNota(note: Note): void {
    this.state$.next({ notas: [...this.state$.value.notas, note] });
    this.storageSrv.setStorage(this.state$.value.notas);
  }

  removeNota(id: Note['id']): void {
    this.state$.next({
      notas: this.state$.value.notas.filter((note) => note.id !== id),
    });
    this.storageSrv.setStorage(this.state$.value.notas);
  }

  updateNota(note: Note): void {
    const notes = this.state$.value.notas;
    const newNotes = notes.map((t) => (t.id === note.id ? note : t));
    this.state$.next({ notas: newNotes });
    this.storageSrv.setStorage(newNotes);
  }
}
