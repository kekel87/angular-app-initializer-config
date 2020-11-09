import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurableRoutingModule } from './configurable.routing';
import { ConfigurableComponent } from './configurable.component';
import { ConfigutationToken, defaultConfigutation, Configuration } from './configurable.config';

@NgModule({
  imports: [
    CommonModule,
    ConfigurableRoutingModule
  ],
  declarations: [ConfigurableComponent],
  providers: [{ provide: ConfigutationToken, useValue: defaultConfigutation }],
})
export class ConfigurableModule {
  static withConfig(configuration: Configuration): ModuleWithProviders {
    return {
      ngModule: ConfigurableModule,
      providers: [{ provide: ConfigutationToken, useValue: configuration }],
    };
  }
}