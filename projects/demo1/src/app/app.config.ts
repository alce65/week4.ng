import { ApplicationConfig, LOCALE_ID, isDevMode } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

registerLocaleData(localeEs);

export let urlBase = '';

if (isDevMode()) {
  urlBase = 'http://localhost:3001';
} else {
  urlBase = 'https://server-fake.onrender.com';
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
