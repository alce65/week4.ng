import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

type MenuOption = {
  label: string;
  path: string;
  // action?: () => void;
  // matMenu?: MatMenu;
  // subOptions?: MenuOption[];
};

@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterModule],
  template: `
    @for (item of options; track $index) {
      <a mat-button [routerLink]="item.path">
        {{ item.label }}
      </a>
      <!--
      [matMenuTriggerFor]="item.matMenu ? item.matMenu : null"
      <mat-menu #{{item.matMenu}}="matMenu">
        @if (item.subOptions) {
          @for (subItem of item.subOptions; track $index) {
            <button mat-menu-item (click)="subItem?.action()">
              {{ subItem.label }}
            </button>
          }
        }
      </mat-menu> -->
    }
  `,
  styles: ``,
})
export class MenuComponent {
  options: MenuOption[] = [
    {
      label: 'Home',
      path: 'home',
      // matMenu: 'home' as unknown as MatMenu,
      // subOptions: [
      //   {
      //     label: 'Home 1',
      //     action: () => console.log('Home 1 clicked'),
      //   },
      //   {
      //     label: 'Home 2',
      //     action: () => console.log('Home 2 clicked'),
      //   },
      //   {
      //     label: 'Home 3',
      //     action: () => console.log('Home 3 clicked'),
      //   },
      // ],
    },
    {
      label: 'Porfolio',
      path: 'porfolio',
      // action: () => console.log('Porfolio clicked'),
    },
    {
      label: 'About',
      path: 'about',
      // action: () => console.log('About clicked'),
    },
  ];
}
