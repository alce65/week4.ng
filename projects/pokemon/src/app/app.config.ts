import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export type ApiUrls = {
  pokeUrl: string;
  privateUrl: string;
};

export const API_URLS = new InjectionToken<ApiUrls>('api.urls.token');

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: API_URLS,
      useValue: {
        pokeUrl: 'https://pokeapi.co/api/v2',
        privateUrl: 'http://localhost:3000/pokemons',
      },
    },
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
