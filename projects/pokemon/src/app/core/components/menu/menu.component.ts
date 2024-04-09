import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MenuOption } from '../../types/menu-option';

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        @for (item of items; track $index) {
          <li>
            <a [routerLink]="item.path" routerLinkActive="active">{{
              item.title
            }}</a>
          </li>
        }
      </ul>
    </nav>
  `,
  styles: `
    nav {
      padding: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      align-items: center;

      @media (width > 650px) {
        flex-direction: row;
        gap: 1rem;
        justify-content: space-around;
      }
    }
    li {
      display: inline;
    }
    a {
      font-size: 1.2rem;
      text-decoration: none;
      font-weight: 500;
      color: var(--color_menu);
    }
    .active {
      font-weight: 900;
      text-decoration: underline;
    }
  `,
})
export class MenuComponent {
  @Input({
    required: true,
  })
  items: MenuOption[] = [];
}
