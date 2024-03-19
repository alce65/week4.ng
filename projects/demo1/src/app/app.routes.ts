import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import('./features/home/home.component'),
  },

  {
    path: 'todo',
    title: 'Tareas',
    loadComponent: () => import('./features/todo/todo.component'),
  },
  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () => import('./features/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
