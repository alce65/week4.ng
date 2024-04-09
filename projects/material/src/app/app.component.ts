import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],

  template: `
    <isdi-menu />
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'material';
}
