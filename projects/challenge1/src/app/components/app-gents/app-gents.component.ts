import { Component } from '@angular/core';
import { getGentlemenData } from '../../services/data';
import { Gentleman } from '../../model/gentleman';
import { InfoComponent } from '../info/info.component';
import { ButtonAllComponent } from '../button-all/button-all.component';
import { GentlemanComponent } from '../gentleman/gentleman.component';

@Component({
  selector: 'isdi-app-gents',
  standalone: true,
  imports: [InfoComponent, ButtonAllComponent, GentlemanComponent],
  templateUrl: './app-gents.component.html',
  styleUrl: './app-gents.component.css',
})
export class AppGentsComponent {
  title = 'The pointing gentlemen';
  gentlemen: Gentleman[] = [];
  selectedGent: Gentleman[] = [];

  constructor() {
    this.gentlemen = getGentlemenData();
  }

  selectedGentlemen() {
    return (this.selectedGent = this.gentlemen.filter(
      (gentleman) => gentleman.selected,
    ));
  }

  selectAll() {
    this.gentlemen.forEach((gentleman) => {
      gentleman.selected = true;
    });
  }

  deleteItem = (deleteGent: Gentleman) => {
    this.gentlemen = this.gentlemen.filter(
      (gentleman) => gentleman.id !== deleteGent.id,
    );
  };

  selectItem = (gentleman: Gentleman) => {
    // gentleman.selected = !gentleman.selected;
    this.gentlemen = this.gentlemen.map((gent) =>
      gent.id === gentleman.id ? { ...gent, selected: !gent.selected } : gent,
    );
    console.log(this.gentlemen);
  };
}
