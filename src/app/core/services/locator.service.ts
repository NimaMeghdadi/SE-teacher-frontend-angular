import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceLocator {
  public static injector: Injector;
}
