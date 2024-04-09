import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'isdi-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
  ],
})
export class PorfolioComponent {
  private breakpointObserver = inject(BreakpointObserver);
  title = 'Porfolio';

  menuOptions = [
    {
      label: 'Datos personales',
      path: 'personal',
    },
    {
      label: 'Proyectos',
      path: 'project',
    },
    {
      label: 'Formacion',
      path: 'learning',
    },
    {
      label: 'Contacto',
      path: 'contact',
    },
    {
      label: 'Home',
      path: '/home',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
