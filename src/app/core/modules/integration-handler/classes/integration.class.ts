// Core Packages
import { Injector } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";

// NPM Packages
import { take } from "rxjs/operators";

// Inner Files
import { QueryParams } from "../interfaces";

export abstract class Integration {
  public router: Router;
  public queryParams: QueryParams<string> = {};
  public routeUrl: string = "";
  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this._urlParser();
  }

  private _urlParser() {
    this.router.events.pipe(take(1)).subscribe(route => {
      if (route instanceof NavigationStart) {
        const { url } = route;
        this.routeUrl = url;
        this._parseRouteQueryParams(url);
      }
    });
  }

  private _parseRouteQueryParams(url: string) {
    let queryParamKeys: string[] = (url.split("?")[1] ?? "").split("&");
    queryParamKeys.forEach((param: string, index) => {
      if (param === "") index = queryParamKeys.length + 1;
      let paramKeyValue = param.split("=");
      this.queryParams[paramKeyValue[0]] = paramKeyValue[1];
    });
  }

  public filteredQueryParam(allowedQueryParamList: string[] = []) {
    Object.keys(this.queryParams).forEach(param => {
      if (!allowedQueryParamList.includes(param))
        delete this.queryParams[param];
    });
    return this.queryParams;
  }
  // TODO: UNCOMMENT
  // public setUserInformation?();

  // public handleNavigation?();

  // public roleManagment?();
}
