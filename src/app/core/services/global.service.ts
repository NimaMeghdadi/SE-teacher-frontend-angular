import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RequestBuilder } from './request.service';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login.model';
import { Toaster } from '../toast-notification';
import { Response } from '../type/new.type';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private login$: BehaviorSubject<UserLogin>;
  private loadingCounter$: BehaviorSubject<number>;
  private repository: Repository = { dateTime: new Date() };

  constructor(public http: HttpClient, public toaster: Toaster, public router: Router) {
    this.login$ = new BehaviorSubject<UserLogin>(null);
    this.loadingCounter$ = new BehaviorSubject<number>(0);
  }


  get loadingAsObservable() {
    return this.loadingCounter$.asObservable();
  }

  public startLoading(): void {
    window.requestAnimationFrame( () => {
      this.loadingCounter$.next(this.loadingCounter$.value + 1);
    });
  }

  public finishLoading(): void {
    window.requestAnimationFrame( () => {
      if (this.loadingCounter$.value > 0) {
          this.loadingCounter$.next(this.loadingCounter$.value - 1);
      }
    });
  }

  public apiRequest<T>(request: RequestBuilder): Observable<Response<T>> {
    return request.call(this);
  }

  get userLoginAsObservable() {
    return this.login$.asObservable();
  }

  public get token(): HttpParams {
    const user: UserLogin =  this.currentUser ? this.currentUser : null;
    if (user && user.jwt) {
      return new HttpParams().set('Token', user.jwt);
    } else {
      return null;
    }
  }

  public get currentUser(): UserLogin {
    if (localStorage.getItem('user') && localStorage.getItem('user').length > 0) {
      this.repository.userLogin = JSON.parse(localStorage.getItem('user'));
      return this.repository.userLogin;
    } else {
      return null;
    }
  }

  public userLogin(loginUser: UserLogin): void {
    this.repository.userLogin = Object.assign({}, loginUser);
    localStorage.setItem('user', JSON.stringify(loginUser));
    this.login$.next(this.repository.userLogin);
  }

  public userLogout(): void {
    this.repository.userLogin = null;
    this.login$.next(this.repository.userLogin);
    this.router.navigate(['/auth/login']);
  }

}

export interface Dictionary<T> {
  [Key: string]: T;
}

export interface Repository extends Dictionary<any> {
  dateTime: Date;
}
