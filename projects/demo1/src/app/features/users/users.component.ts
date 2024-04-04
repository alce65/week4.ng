import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../../shared/menu/menu.component';
import { routes } from '../../app.routes';
import { MenuOption } from '../../core/types/menu-option';

@Component({
  selector: 'isdi-users',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  template: `
    <h2>Users</h2>

    <isdi-menu [items]="menuOptions" />

    <router-outlet />
  `,
  styles: ``,
})
export default class UsersComponent {
  menuOptions: MenuOption[] = [];

  constructor() {
    this.menuOptions = routes
      .find((item) => item.path === 'users')!
      .children!.filter((route) => route.path !== '**' && route.path !== '')
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
