import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { portfolioRoutes } from './components/porfolio/porfolio.routes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'porfolio',
    component: PorfolioComponent,
    children: portfolioRoutes,
  },
  { path: '**', redirectTo: 'home' },
];
