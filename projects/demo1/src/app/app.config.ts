import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, provideRouter(routes)],
};
