import { Component, Input } from '@angular/core';
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
  @Input({
    required: true,
  })
  gent!: Gentleman;
  @Input({ required: true }) selectItem!: (gent: Gentleman) => void;
  @Input({ required: true }) deleteItem!: (gent: Gentleman) => void;
}
