import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { api_url } from './core/custom_injection/api_url';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),

    provideHttpClient(withFetch()),
   provideAnimations(),
  //  make custom injection token available to the application
  {
    provide: api_url,
    useValue: 'https://ecommerce.routemisr.com/api/v1'
  }
  ]
};
