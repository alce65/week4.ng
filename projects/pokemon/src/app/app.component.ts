import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { MenuOption } from './core/types/menu-option';
import { routes } from './app.routes';
import { MenuComponent } from './core/components/menu/menu.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  template: `
    <isdi-header>
      <isdi-menu [items]="menuOptions" />
    </isdi-header>

    <main class="main">
      <router-outlet />
    </main>
  `,
  styles: `
    :host main {
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      box-sizing: inherit;
      position: relative;
    }

    .content {
      display: flex;
      justify-content: space-around;
      width: 100%;
      max-width: 700px;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 650px) {
      .content {
        flex-direction: column;
        width: max-content;
      }
    }
  `,
})
export class AppComponent {
  title = 'pokemon';
  menuOptions: MenuOption[] = [];

  constructor() {
    this.menuOptions = routes
      .filter((route) => route.path !== '**' && route.path !== '')
      .filter((route) => !route.path?.includes(':'))
      .map((route) => ({
        title: route.title as string,
        path: route.path as string,
      }));
  }
}
