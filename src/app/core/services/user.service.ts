import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-login.model';
import { Toaster } from '../toast-notification';
import { GlobalService } from './global.service';
import { ApiRequest } from './request.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private _currentUser$: BehaviorSubject<Partial<User>> = new BehaviorSubject<
    Partial<User>
  >({});

  public get User(): Observable<Partial<User>> {
    return this._currentUser$.asObservable();
  }

  public set activeUser(user: User) {
    this._currentUser$.next(user);
  }

  public get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn$.asObservable();
  }

  public set loggedIn(status: boolean) {
    this._isLoggedIn$.next(status);
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private toaster: Toaster,
    private globalService: GlobalService
  ) {}

  login(model) {
    this.http.post(`${environment.baseUrl}login`, model).subscribe(
      ({ data }: any) => {
        this.initUserData(data);
      },
      (error) => {
        this.toaster.open({
          caption: 'Error ...',
          text: error.error.messages[0],
          type: 'danger',
        });
      }
    );
  }

  signup(model) {
    // model['UserKindID'] = 1;
    // model['AccountID'] = 1;
    // model['RoleIDList'] = [];
    // return ApiRequest('POST', true)
    //   .setBaseUrl(environment.baseUrl)
    //   .controller('user')
    //   .action('register')
    //   .setBodyModel(model)
    //   .call(this.globalService);
  }

  initUserData(data?, success?) {
      let currentUser = data.User;
      localStorage.setItem('Token', currentUser.GUID);
      localStorage.setItem('User', JSON.stringify(currentUser));
      this.loggedIn = true;
      console.log(currentUser);
      this._currentUser$.next(currentUser);
      this.router.navigate(['/']);
  }
}
