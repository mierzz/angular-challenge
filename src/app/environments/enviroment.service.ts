import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { AppEnviroment } from './enviroment.interface';

export const ENVIRONMENT = new InjectionToken<AppEnviroment>('environment');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  readonly environment: AppEnviroment;

  // We need @Optional to be able start app without providing environment file
  constructor(@Optional() @Inject(ENVIRONMENT) environment: AppEnviroment) {
    this.environment = environment ?? {};
  }
}
