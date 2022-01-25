import { Observable, Subject } from "rxjs";
import { Type } from "@angular/core";
import { ToastType, ToastConfig } from "..";

export class Toast {
  readonly autoClose: boolean | undefined;
  readonly duration: number | undefined;
  readonly text: string | undefined;
  readonly caption: string | undefined;
  readonly type: ToastType | undefined;
  readonly component: Type<any> | undefined;

  private readonly closeFunction: (toast: Toast) => void;
  private readonly _onClose = new Subject<any>();
  private timeoutId: any;

  constructor(config: ToastConfig, closeFunction: (toast: Toast) => void) {
    this.autoClose = config.autoClose;
    this.duration =
      config.duration && config.duration > 0 ? config.duration : 0;
    this.text = config.text;
    this.caption = config.caption;
    this.type = config.type;
    this.component = config.component;
    this.closeFunction = closeFunction;
    this._setTimeout();
  }

  get onClose(): Observable<any> {
    return this._onClose.asObservable();
  }

  close(result?: any) {
    if (!this._onClose.closed) {
      this._onClose.next(result);
      this._onClose.complete();
    }
    this.closeFunction(this);
    this._clearTimeout();
  }

  private _setTimeout() {
    if (this.autoClose && this.duration && this.duration > 0) {
      this.timeoutId = setTimeout(() => this.close(), this.duration);
    }
  }

  private _clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
