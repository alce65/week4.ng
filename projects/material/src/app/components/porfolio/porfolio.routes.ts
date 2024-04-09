import { Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ProjectsComponent } from './projects/projects.component';
import { LearningComponent } from './learning/learning.component';
import { ContactComponent } from './contact/contact.component';

export const portfolioRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal' },
  { path: 'personal', component: PersonalComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'personal' },
];
