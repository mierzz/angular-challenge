import { AppEnviroment } from './enviroment.interface';
import { environment as devEnvironment } from './environment.dev';

export const environment: AppEnviroment = {
  ...devEnvironment,
  production: true,
};
