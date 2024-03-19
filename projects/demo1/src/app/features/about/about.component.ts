import { Component } from '@angular/core';
import { SampleNgComponent } from './sample-ng/sample-ng.component';

@Component({
  selector: 'isdi-about',
  standalone: true,
  imports: [SampleNgComponent],
  template: `
    <h2>Acerca de nosotros</h2>
    <isdi-sample-ng />
  `,
  styles: ``,
})
export default class AboutComponent {}
