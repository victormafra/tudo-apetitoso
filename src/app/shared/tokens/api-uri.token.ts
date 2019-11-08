import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const API_URI = new InjectionToken<string>('API_URI', {
  providedIn: 'root',
  factory: () => environment.api
});
