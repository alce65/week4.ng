import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [HeaderComponent],
  template: ` <isdi-header />`,
  styles: ``,
})
export class HomeComponent {}
