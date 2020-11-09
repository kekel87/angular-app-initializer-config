import { InjectionToken } from "@angular/core";

export interface Configuration {
 title: string;
}
export const ConfigutationToken = new InjectionToken<Configuration>('DefaultConfigutation');
export const defaultConfigutation: Configuration = { title: 'Default' };
