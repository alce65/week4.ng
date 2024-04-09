import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'challenge1' },
  {
    path: 'challenge1',
    title: 'Challenge 1',
    loadComponent: () =>
      import('./challenge1/components/app-gents/app-gents.component'),
  },
  {
    path: 'challenge2',
    title: 'Challenge 2',
    loadComponent: () => import('./challenge2/challenge2.component'),
  },
  {
    path: 'challenge3',
    title: 'Challenge 3',
    loadComponent: () => import('./challenge3/challenge3.component'),
  },
  {
    path: 'challenge4',
    title: 'Challenge 4',
    loadComponent: () => import('./challenge4/challenge4.component'),
  },
  {
    path: 'challenge6',
    title: 'Challenge 6',
    loadComponent: () => import('./challenge6/challenge6.component'),
  },
  { path: '**', redirectTo: 'challenge1' },
];
