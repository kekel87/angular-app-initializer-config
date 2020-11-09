import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { RuntimeConfigResolver } from './runtime-config.resolver';
import { ConfigutationToken } from './configurable/configurable.config';
import { ConfigurableModule } from './configurable/configurable.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [BrowserModule, AppRoutingModule, HttpClientModule, ConfigurableModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers: [
    RuntimeConfigResolver,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [RuntimeConfigResolver],
      useFactory: (runtimeConfigResolver: RuntimeConfigResolver) => () => runtimeConfigResolver.resolve().toPromise()
    },
    {
      provide: ConfigutationToken,
      deps: [RuntimeConfigResolver],
      useFactory: (runtimeConfigResolver: RuntimeConfigResolver) => runtimeConfigResolver.config,
    }
  ]
})
export class AppModule { }
