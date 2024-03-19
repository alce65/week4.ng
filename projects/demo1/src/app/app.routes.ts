import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TodoComponent } from './features/todo/todo.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', title: 'Inicio', component: HomeComponent },
  { path: 'todo', title: 'Tareas', component: TodoComponent },
  { path: 'about', title: 'Acerca de', component: AboutComponent },
  { path: '**', redirectTo: 'home' },
];
