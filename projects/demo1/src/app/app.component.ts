import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { routes } from './app.routes';
import { MenuOption } from './core/types/menu-option';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <isdi-header [title]="title">
      <isdi-menu [items]="menuOptions" />
    </isdi-header>
    <main>
      <router-outlet />
    </main>
    <isdi-footer [brand]="brand" />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aprendiendo Angular 17';
  brand = 'ISDI-Coders';
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
