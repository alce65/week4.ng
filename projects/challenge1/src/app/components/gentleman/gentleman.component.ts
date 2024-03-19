import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gentleman } from '../../model/gentleman';

@Component({
  selector: 'isdi-gentleman',
  standalone: true,
  imports: [],
  templateUrl: './gentleman.component.html',
  styleUrls: [
    './gentleman.component.css',
    '../app-gents/app-gents.component.css',
  ],
})
export class GentlemanComponent {
  @Input({ required: true }) gent!: Gentleman;
  @Output() selectGentEvent: EventEmitter<Gentleman> =
    new EventEmitter<Gentleman>();
  @Output() deleteGentEvent: EventEmitter<Gentleman> =
    new EventEmitter<Gentleman>();

  // selectItem() {
  //   this.selectGentEvent.emit(this.gent);
  // }

  deleteItem() {
    this.deleteGentEvent.emit(this.gent);
  }
}
