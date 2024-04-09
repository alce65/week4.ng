import { Component } from '@angular/core';

@Component({
  selector: 'isdi-learning',
  standalone: true,
  imports: [],
  template: ` <p>learning works!</p> `,
  styles: `
    :host {
      display: block;
      padding: 1rem 2rem;
    }
  `,
})
export class LearningComponent {}
