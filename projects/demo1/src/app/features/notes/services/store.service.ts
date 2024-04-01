import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../../../core/models/note';
import { NotesApiRepoService } from './api.repo.service';
import { HttpErrorResponse } from '@angular/common/http';

type NotesState = {
  notes: Note[];
  error: HttpErrorResponse | null;
};

@Injectable({
  providedIn: 'root',
})
export class NotesStoreService {
  private state$: BehaviorSubject<NotesState>;
  // public storageSrv = inject(StorageService<Note>);
  public apiRepoSrv = inject(NotesApiRepoService);

  constructor() {
    this.state$ = new BehaviorSubject({
      notes: [] as Note[],
      error: null as HttpErrorResponse | null,
    });
  }

  getState(): Observable<NotesState> {
    return this.state$.asObservable();
  }

  loadNotes(): void {
    // const notes = this.storageSrv.getStorage();
    // if (notes.length === 0) {
    //   getNotes().then((notes) => {
    //     this.storageSrv.setStorage(notes);
    //   });
    // }

    this.apiRepoSrv.getAll().subscribe({
      next: (notes) => {
        const state: NotesState = {
          ...this.state$.value,
          notes: notes,
        };
        this.state$.next(state);
      },
      error: (error: HttpErrorResponse) => {
        const state: NotesState = {
          ...this.state$.value,
          error: error,
        };
        this.state$.next(state);
      },
    });
  }

  addNota(note: Note): void {
    this.apiRepoSrv.add(note).subscribe({
      next: (note) => {
        const state: NotesState = {
          ...this.state$.value,
          notes: [...this.state$.value.notes, note],
        };
        this.state$.next(state);
      },
      error: () => {},
    });
  }

  removeNota(id: Note['id']): void {
    this.apiRepoSrv.delete(id).subscribe({
      next: ({ id }) => {
        const state: NotesState = {
          ...this.state$.value,
          notes: this.state$.value.notes.filter((note) => note.id !== id),
        };

        this.state$.next(state);
      },
      error: () => {},
    });
  }

  updateNota(note: Note): void {
    this.apiRepoSrv.update(note).subscribe({
      next: (note) => {
        const notes = this.state$.value.notes;
        const newNotes = notes.map((t) => (t.id === note.id ? note : t));
        const state: NotesState = {
          ...this.state$.value,
          notes: newNotes,
        };

        this.state$.next(state);
      },
      error: () => {},
    });
  }
}
