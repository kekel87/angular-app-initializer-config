import { Component, Input, Inject } from '@angular/core';
import { ConfigutationToken, Configuration } from './configurable.config';

@Component({
  selector: 'configurable',
  template: `<pre>{{ configuration | json }}</pre>`,
  styles: []
})
export class ConfigurableComponent  {
  constructor(@Inject(ConfigutationToken) public configuration: Configuration) {}
}
