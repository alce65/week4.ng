import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

type MenuOption = {
  label: string;
  path?: string;
  action?: () => void;
  subOptions?: MenuOption[];
};

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule],
  template: `
    @for (item of options; track $index) {
      <button
        mat-button
        [routerLink]="item.path"
        routerLinkActive="active"
        [matMenuTriggerFor]="item.subOptions ? menu : null"
      >
        {{ item.label }}
      </button>

      <mat-menu #menu="matMenu">
        @if (item.subOptions) {
          @for (subItem of item.subOptions; track $index) {
            <button mat-menu-item (click)="subItem?.action()">
              {{ subItem.label }}
            </button>
          }
        }
      </mat-menu>
    }
  `,
  styles: `
    .active {
      border: 1px solid grey;
    }
  `,
})
export class MenuComponent {
  options: MenuOption[] = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Porfolio',
      path: '/porfolio',
    },
    {
      label: 'Services',
      subOptions: [
        {
          label: 'Services 1',
          path: '',
          action: () => console.log('Services 1 clicked'),
        },
        {
          label: 'Services 2',
          path: '',
          action: () => console.log('Services 2 clicked'),
        },
        {
          label: 'Services 3',
          path: '',
          action: () => console.log('Services 3 clicked'),
        },
      ],
    },
    {
      label: 'About',
      subOptions: [
        {
          label: 'About 1',
          path: '',
          action: () => console.log('About 1 clicked'),
        },
        {
          label: 'About 2',
          path: '',
          action: () => console.log('About 2 clicked'),
        },
      ],
    },
  ];
}
