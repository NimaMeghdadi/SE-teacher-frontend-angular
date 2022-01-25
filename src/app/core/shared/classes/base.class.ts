import { Directive, OnDestroy } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { environment } from "@env/environment";

@Directive()
export class Base implements OnDestroy {
  // for run as production do   ng s -o --env=prod
  // for run as stage  ng s -o --env=stage
  // for run as ng s -o --env=local
  protected serviceBaseUrl = environment.BASE_URL;
  protected headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
  });

  public constructor(private actionUrl: string) {}

  ngOnDestroy() {}

  public SetActionUrl(actionUrl: string) {
    this.actionUrl = actionUrl;
  }

  public getServiceUrl(actionUrl: string = ""): string {
    if (actionUrl === "") {
      return this.serviceBaseUrl + this.actionUrl + "/";
    } else {
      return this.serviceBaseUrl + actionUrl + "/";
    }
  }
}
