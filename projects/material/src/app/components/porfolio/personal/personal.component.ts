import { Component } from '@angular/core';

@Component({
  selector: 'isdi-personal',
  standalone: true,
  imports: [],
  template: ` <p>personal works!</p> `,
  styles: `
    :host {
      display: block;
      padding: 1rem 2rem;
    }
  `,
})
export class PersonalComponent {}
