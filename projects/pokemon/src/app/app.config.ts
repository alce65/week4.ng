import { ApplicationConfig, InjectionToken, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export type ApiUrls = {
  pokeUrl: string;
  privateUrl: string;
};

export let urlBase = '';

if (isDevMode()) {
  urlBase = 'http://localhost:3001';
} else {
  urlBase = 'https://server-fake.onrender.com';
}

export const API_URLS = new InjectionToken<ApiUrls>('api.urls.token');

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: API_URLS,
      useValue: {
        pokeUrl: 'https://pokeapi.co/api/v2',
        privateUrl: urlBase + '/pokemons',
      },
    },
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
