import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Pokemons',
    loadComponent: () => import('./features/home/home.component'),
  },
  {
    path: 'favorites',
    title: 'Favorites',
    loadComponent: () => import('./features/favorites/favorites.component'),
  },
  {
    path: 'details/:id',
    title: 'Pokemon Details',
    loadComponent: () => import('./features/details/details.component'),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
