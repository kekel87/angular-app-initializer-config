import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Configuration } from './configurable/configurable.config';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RuntimeConfigResolver implements Resolve<Configuration> {
  private privateConfig: Configuration;

  constructor(private httpClient: HttpClient) {}

  get config() {
    return this.privateConfig;
  }

  resolve(): Observable<Configuration> {
    if (this.privateConfig) {
      return of(this.privateConfig);
    }

    return this.httpClient.get<Configuration>('assets/config.json').pipe(
      delay(1000),
      map(config => {
        // Store config for usage in factory
        this.privateConfig = config;
        return this.privateConfig;
      })
    );
  }
}