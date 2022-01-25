import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Toaster } from "..";
import { Dictionary } from "../shared";
import { RequestBuilder } from "./request.service";
import { User } from "../shared/classes/user.class";
import { ApiResponse } from "../shared/interfaces";
@Injectable({
  providedIn: "root",
})
export class GlobalService {
  private _loadingCounter$: BehaviorSubject<number>;
  private _user: User = new User();
  constructor(
    public http: HttpClient,
    public toaster: Toaster,
    public router: Router,
  ) {
    this._loadingCounter$ = new BehaviorSubject<number>(0);
  }

  get loadingAsObservable() {
    return this._loadingCounter$.asObservable();
  }

  public startLoading(): void {
    window.requestAnimationFrame(() => {
      this._loadingCounter$.next(this._loadingCounter$.value + 1);
    });
  }

  public finishLoading(): void {
    window.requestAnimationFrame(() => {
      if (this._loadingCounter$.value > 0) {
        this._loadingCounter$.next(this._loadingCounter$.value - 1);
      }
    });
  }

  public apiRequest<T>(
    request: RequestBuilder,
  ): Observable<ApiResponse<T>> | undefined {
    return request.call(this);
  }
}

export interface Repository extends Dictionary<any> {
  dateTime: Date;
}
