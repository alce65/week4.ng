import { Routes } from '@angular/router';
import { StorageService } from './core/services/storage.service';

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
    providers: [
      StorageService,
      {
        provide: 'STORE_NAME',
        useValue: 'tasks',
      },
    ],
    loadComponent: () => import('./features/todo/todo.component'),
  },
  {
    path: 'users',
    title: 'Usuarios',
    loadComponent: () => import('./features/users/users.component'),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'register_dd' },
      {
        path: 'register_dd',
        title: 'Registro (Data Driven)',
        loadComponent: () =>
          import('./features/users/pages/dd-register/dd-register.component'),
      },
      {
        path: 'register_td',
        title: 'Registro (Template Driven)',
        loadComponent: () =>
          import('./features/users/pages/td-register/td-register.component'),
      },
      { path: '**', redirectTo: 'register_dd' },
    ],
  },
  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () => import('./features/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
];
