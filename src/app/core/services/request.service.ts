import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { GlobalService } from './global.service';
import { Observable, of, throwError } from 'rxjs';
import { ParamsHandler } from '../params-handler';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CachMode, HttpVerb, Response, SchemaName } from '../type/new.type';
import { RequestController, RequestAction } from 'src/app/shared/Request.enum';

export function ApiRequest(
  verb: HttpVerb = 'GET',
  global: boolean = false
): RequestBuilder {
  return new RequestBuilder(verb, global);
}

export class RequestBuilder {
  private static globalRequestID = 0;
  private schema: SchemaName = null;
  private controllerName: RequestController | string;
  private baseUrl: string = environment.serviceBaseUrl;
  private actionName: RequestAction | string;
  private urlParameters: ParamsHandler;
  private bodyParameters: ParamsHandler;
  private requestID: number;
  private cachMode: CachMode = 'none';
  private file: File;
  private loading: boolean;
  private messageShow: boolean;
  private ignoreNullParam: boolean;
  private pdfOutput: boolean;
  private formData: FormData;

  constructor(private verb: HttpVerb = 'GET', public global: boolean = false) {
    this.requestID = RequestBuilder.globalRequestID++;
    this.bodyParameters = new ParamsHandler();
    this.urlParameters = new ParamsHandler();
    this.messageShow = true;
    this.loading = true;
    this.ignoreNullParam = true;
  }

  get getRequestID() {
    return this.requestID;
  }

  public get(): RequestBuilder {
    this.verb = 'GET';
    return this;
  }

  public post(): RequestBuilder {
    this.verb = 'POST';
    return this;
  }

  public delete(): RequestBuilder {
    this.verb = 'DELETE';
    return this;
  }

  public put(): RequestBuilder {
    this.verb = 'PUT';
    return this;
  }

  public schemaName(name: SchemaName) {
    this.schema = name;
    return this;
  }

  public showLoading(show: boolean = true) {
    this.loading = show;
    return this;
  }

  public showMessage(show: boolean = true) {
    this.messageShow = show;
    return this;
  }

  public setMode(cachMode: CachMode) {
    this.cachMode = cachMode;
  }

  public controller(
    controllerName: RequestController | string
  ): RequestBuilder {
    this.controllerName = controllerName;
    return this;
  }

  public action(actionName: RequestAction | string): RequestBuilder {
    this.actionName = actionName;
    return this;
  }

  public pdf(hasPdf: boolean): RequestBuilder {
    this.pdfOutput = hasPdf;
    return this;
  }

  public addParams(model: any, paramConfig: ParamConfig = {}): RequestBuilder {
    const { pagination, paramList } = new ParamConfig(paramConfig);
    if (paramList.length == 0) {
      Object.keys(model).forEach((key) => {
        this.urlParameters.addParam(key, model[key]);
      });
    } else {
      paramList.forEach((key) => {
        this.urlParameters.addParam(key, model[key]);
      });
    }
    if (pagination) {
      this.urlParameters.addParam('PageSize', pagination.pageSize);
      this.urlParameters.addParam('PageIndex', pagination.pageIndex);
    }
    return this;
  }

  public setFormData(body: FormData): RequestBuilder {
    this.formData = body;
    return this;
  }

  public addBodies(model: any, paramList: string[] = []): RequestBuilder {
    if (paramList.length == 0) {
      Object.keys(model).forEach((key) => {
        this.bodyParameters.addParam(key, model[key]);
      });
    } else {
      paramList.forEach((key) => {
        this.bodyParameters.addParam(key, model[key]);
      });
    }
    return this;
  }

  public setBody(data: ParamsHandler): RequestBuilder {
    this.bodyParameters = data;
    return this;
  }

  public setBodyModel(model: any, paramList: string[] = []): RequestBuilder {
    if (paramList.length == 0) {
      Object.keys(model).forEach((key) => {
        this.bodyParameters.addParam(key, model[key]);
      });
    } else {
      paramList.forEach((key) => {
        this.bodyParameters.addParam(key, model[key]);
      });
    }
    return this;
  }

  public addBody(key: any, value: any): RequestBuilder {
    if (value != null && value != undefined) {
      this.bodyParameters.addParam(key, value);
    }
    return this;
  }

  public setParam(param: ParamsHandler): RequestBuilder {
    this.urlParameters = param;
    return this;
  }

  public addParam(key: any, value: any): RequestBuilder {
    if (value != null && value != undefined) {
      this.urlParameters.addParam(key, value);
    }
    return this;
  }

  public ignoreNull(ignore: boolean) {
    this.ignoreNullParam = ignore;
    return this;
  }

  public setBaseUrl(url: string): RequestBuilder {
    this.baseUrl = url;
    return this;
  }

  private getUrl(): string {
    let url = this.baseUrl;
    if (environment.APP_NAME && this.global === false) {
      url += environment.APP_NAME + '/';
    }
    if (this.schema) {
      url += this.schema + '/';
    }
    if (this.controllerName && this.controllerName.toString() !== '') {
      url += this.controllerName + '/';
    }
    if (this.actionName && this.actionName.toString() !== '') {
      url += this.actionName;
    }
    return url;
  }

  public call(globalService: GlobalService): Observable<Response<any>> {
    const hasParam =
      this.urlParameters !== undefined && this.urlParameters.count() > 0;
    const urlWithParams =
      this.getUrl() + (hasParam ? '?' + this.urlParameters.urlParamaters : '');
    const token = globalService.token;
    const hdrs = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': 'true',
      // Authorization: `${localStorage.getItem('Token')}`,
    });
    if (this.loading) {
      globalService.startLoading();
    }
    if (this.verb === 'GET') {
      return globalService.http
        .get(urlWithParams, { headers: hdrs, params: token })
        .pipe(
          map(this.handlePipeMap),
          catchError((error) => {
            return this.ErrorHandeling(error, globalService);
          }),
          tap((resp) => this.messageHandling(this, resp, globalService))
        );
    } else if (this.verb === 'POST') {
      return globalService.http
        .post(urlWithParams, this.toObject(this.bodyParameters.getParams()), {
          headers: hdrs,
          params: token,
        })
        .pipe(
          map(this.handlePipeMap),
          catchError((error) => {
            return this.ErrorHandeling(error, globalService);
          }),
          tap((resp) => this.messageHandling(this, resp, globalService))
        );
    } else if (this.verb === 'PUT') {
      return globalService.http
        .put(urlWithParams, this.toObject(this.bodyParameters.getParams()), {
          headers: hdrs,
          params: token,
        })
        .pipe(
          map(this.handlePipeMap),
          catchError((error) => {
            return this.ErrorHandeling(error, globalService);
          }),
          tap((resp) => this.messageHandling(this, resp, globalService))
        );
    } else if (this.verb === 'DELETE') {
      return globalService.http
        .delete(urlWithParams, { headers: hdrs, params: token })
        .pipe(
          map(this.handlePipeMap),
          catchError((error) => {
            return this.ErrorHandeling(error, globalService);
          }),
          tap((resp) => this.messageHandling(this, resp, globalService))
        );
    }
  }

  private messageHandling(
    parent: RequestBuilder,
    resp: Response<any>,
    globalService: GlobalService
  ) {
    if (parent.loading === true) {
      globalService.finishLoading();
    }
    if (parent.messageShow) {
      // resp.messages.forEach((data) => {
      //   globalService.toaster.open({
      //     type: resp.success ? 'success' : 'danger',
      //     duration: 3000,
      //     caption: '',
      //     text: data.trim(),
      //   });
      // });
    }
  }

  private handlePipeMap(resp: any) {
    return resp;
  }

  ErrorHandeling(error: HttpErrorResponse, globalService: GlobalService) {
    if (this.loading === true) {
      globalService.finishLoading();
    }
    const { status } = error;
    const toaster = globalService.toaster; // ServiceLocator.injector.get(Toaster);
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      toaster.open({
        type: 'danger',
        caption: 'Client Exception',
        text: error.error.message,
      });
    } else {
      // Get server-side error
      switch (status) {
        case 404: {
          toaster.open({
            type: 'danger',
            caption: 'Not Found',
            text: 'Error Code: 404',
          });
          break;
        }
        case 401: {
          toaster.open({
            type: 'danger',
            caption: 'Unathorize',
            text: 'Error Code: 401',
          });
          break;
        }
        case 403: {
          toaster.open({
            type: 'danger',
            caption: 'Access Denide',
            text: 'Error Code: 403',
          });
          break;
        }
        case 500: {
          toaster.open({
            type: 'danger',
            caption: 'Server Error',
            text: 'Error Code: 500',
          });
          break;
        }
        case 907: {
          toaster.open({
            type: 'danger',
            caption: 'Server Error',
            text: error.error.messages,
          });
          break;
        }
        case 0: {
          toaster.open({
            type: 'warning',
            caption: 'server message',
            text: error.message,
          });
          break;
        }
        default:
          toaster.open({
            type: 'danger',
            caption: `Error Code: ${error.status}`,
            text: error.message,
          });
      }
    }

    return throwError(error);
  }

  toObject(model) {
    let temp = {};
    Object.keys(model).forEach((key) => {
      temp[key] = model[key];
    });
    return temp;
  }
}

export class ParamConfig {
  paramList?: string[] = [];
  pagination?: any;
  constructor(paramConfig) {
    this.pagination = paramConfig?.pagination;
    this.paramList = paramConfig.paramList ? paramConfig.paramList : [];
  }
}
