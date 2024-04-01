import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../../core/models/note';

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class NotesApiRepoService {
  urlNotes = new URL('notes', urlBase).toString();
  constructor(private http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get(this.urlNotes, {}) as Observable<Note[]>;
  }

  add(note: Note): Observable<Note> {
    return this.http.post(this.urlNotes, note) as Observable<Note>;
  }

  update(note: Note): Observable<Note> {
    const url = this.urlNotes + '/' + note.id;
    return this.http.patch(url, note) as Observable<Note>;
  }

  delete(id: Note['id']): Observable<Note> {
    const url = this.urlNotes + '/' + id;
    return this.http.delete(url) as Observable<Note>;
  }
}
