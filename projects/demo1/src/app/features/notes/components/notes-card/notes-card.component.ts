import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../../core/models/note';
import { NotesStoreService } from '../../services/store.service';

@Component({
  selector: 'isdi-notes-card',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input
      type="checkbox"
      [(ngModel)]="item.isImportant"
      (change)="sendUpdate()"
    />
    <span>{{ item.title }}</span>
    <span>{{ item.author }}</span>
    <span>
      <button type="button" (click)="storeSrv.removeNota(item.id)">🗑️</button>
      <button type="button">✏️</button>
    </span>
  `,
  styles: `
    :host {
      padding: 10px;
      border-bottom: 1px solid #ccc;
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
    button {
      background-color: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
  `,
})
export class NotesCardComponent {
  @Input({ required: true }) item!: Note;

  storeSrv = inject(NotesStoreService);

  sendUpdate() {
    this.storeSrv.updateNota(this.item);
  }
}
