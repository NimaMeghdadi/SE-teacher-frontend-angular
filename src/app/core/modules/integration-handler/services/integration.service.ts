import {
  ApplicationName,
  ParamsHandler,
  WindowTarget,
  BaseDestination,
  APPLICATION_URLS,
} from "@app/core";

export function ApplicationNavigator(): IntegrationHandler {
  return new IntegrationHandler();
}
export class IntegrationHandler {
  private _applicationName: ApplicationName = "AlphaPlan";
  private _token: string | null = '';
  private _paramsHandler: ParamsHandler;
  private _windowTarget: WindowTarget = "_blank";
  private _baseDestination: BaseDestination = "deploy";
  constructor() {
    this._paramsHandler = new ParamsHandler();
  }

  public destinationApplication(applicationName: ApplicationName) {
    this._applicationName = applicationName;
    return this;
  }

  public appendToken(appendToken: boolean) {
    if (appendToken) {
      this._token = localStorage.getItem("Token");
      this._paramsHandler.addParam("Token", this._token);
    }
    return this;
  }

  public addParams(model: any, paramList: string[] = []) {
    if (paramList.length === 0) {
      Object.keys(model).forEach((key: string) => {
        this._paramsHandler.addParam(key, model[key]);
      });
    } else {
      paramList.forEach((key: string) => {
        this._paramsHandler.addParam(key, model[key]);
      });
    }
    return this;
  }

  public windowTarget(windowTarget: WindowTarget) {
    this._windowTarget = windowTarget;
    return this;
  }

  public baseDestination(baseDestination: BaseDestination) {
    this._baseDestination = baseDestination;
    return this;
  }

  public startIntegration() {
    let queryParams: string = this._paramsHandler.urlParamaters;
    window.open(
      `${this._findUrlByDestination()}?${queryParams}`,
      this._windowTarget,
    );
  }

  private _findUrlByDestination(): string {
    return APPLICATION_URLS[this._applicationName][this._baseDestination];
  }
}
