import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { AddFormComponent } from './components/add-form/add-form.component';

@Component({
  selector: 'isdi-challenge6',
  standalone: true,
  imports: [ListComponent, AddFormComponent],
  template: `
    <h2>Challenge6</h2>
    <isdi-add-form />
    <isdi-list />
  `,
  styles: ``,
})
export default class Challenge6Component {}
