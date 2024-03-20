import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MenuOption } from './core/types/menu-option';
import { routes } from './app.routes';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  template: `
    <isdi-header [title]="title">
      <isdi-menu [items]="menuOptions" />
    </isdi-header>
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'Angular Challenges';
  menuOptions: MenuOption[] = [];

  constructor() {
    this.menuOptions = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
