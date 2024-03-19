import { Component, Input } from '@angular/core';
import { MenuOption } from '../../core/types/menu-option';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  template: ` <nav>
    <ul>
      @for (item of items; track $index) {
        <li>
          <a [routerLink]="item.path" routerLinkActive="active">{{
            item.title
          }}</a>
        </li>
      }
    </ul>
  </nav>`,
  styles: `
    nav {
      background-color: #f2f2f2;
      padding: 10px;
      width: 200px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-around;
    }
    li {
      display: inline;
    }
    a {
      text-decoration: none;
      color: #333;
    }
    .active {
      font-weight: bold;
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
