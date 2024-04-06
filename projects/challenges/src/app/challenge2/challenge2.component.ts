import { Component } from '@angular/core';
import { AppFormsComponent } from './components/app-forms/app-forms.component';
import { MainContainerComponent } from '../shared/main-container/main-container.component';

@Component({
  selector: 'isdi-challenge2',
  standalone: true,
  imports: [AppFormsComponent, MainContainerComponent],
  template: `
    <isdi-main-container>
      <h2>{{ title }}</h2>
      <isdi-app-forms />
    </isdi-main-container>
  `,
  styles: ``,
})
export default class Challenge2Component {
  title = 'Challenge2: Formulario';
}
