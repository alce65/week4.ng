import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export let urlBase: string;

if (isDevMode()) {
  urlBase = 'http://localhost:3001';
} else {
  urlBase = 'https://server-fake.onrender.com';
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())],
};
