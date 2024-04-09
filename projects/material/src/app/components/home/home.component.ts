import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'isdi-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  template: `
    <isdi-header>
      <isdi-menu />
    </isdi-header>
  `,
  styles: ``,
})
export class HomeComponent {}
