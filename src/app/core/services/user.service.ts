import jwt_decode from "jwt-decode";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { User } from "../shared/classes/user.class";
import { Observable } from "rxjs/internal/Observable";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Login, LoginWithToken, Tokens } from "@app/authentication";
import { GlobalService, StorageManagerService, ApiRequest } from ".";
import { UserAccount, ApiResponse } from "@app/core/shared/interfaces";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly _Token = "Token";
  private readonly _Refresh_Token = "Refresh_Token";
  private readonly _User = "User";
  private _loggedUser: string = "";
  private _user: User | null = null;

  private _accountList: BehaviorSubject<UserAccount[]> = new BehaviorSubject<
    UserAccount[]
  >([]);

  constructor(
    private readonly _globalService: GlobalService,
    private readonly _storageManagerService: StorageManagerService,
    private readonly _router: Router,
  ) {}

  public get user(): User {
    return new User(
      JSON.parse(this._storageManagerService.getLocalStorage("User")),
    );
  }

  public get AccountList(): Observable<UserAccount[]> {
    return this._accountList.asObservable();
  }

  login(user: Login | LoginWithToken) {
    ApiRequest("POST")
      .controller("user")
      .action("login")
      .setBodyModel(user)
      .call(this._globalService)
      .pipe(
        tap((response: ApiResponse<any>) =>
          this._doLoginUser(new User(response.Data.User)),
        ),
      )
      .subscribe(resp => {
        if (!resp.Success) {
          this._router.navigate(["./login"]);
        }
      });
  }

  logout() {
    return ApiRequest("POST")
      .controller("user")
      .action("logout")
      .setBodyModel({
        refreshToken: this._storageManagerService.getLocalStorage(
          this._Refresh_Token,
        ),
      })
      .call(this._globalService)
      .pipe(tap(() => this._doLogoutUser()));
  }

  isLoggedIn() {
    return !!this._storageManagerService.getLocalStorage(this._Token);
  }

  refreshToken() {
    ApiRequest("POST")
      .controller("user")
      .action("refresh")
      .setBodyModel({
        refreshToken: this._storageManagerService.getLocalStorage(
          this._Refresh_Token,
        ),
      })
      .call(this._globalService);
  }

  private _doLoginUser(user: User) {
    this._loggedUser = user.UserName;
    this._storeUser(user);
    // this._storeTokens();
  }

  private _doLogoutUser() {
    this._loggedUser = "";
    this._removeTokens();
  }

  private _storeUser(user: User) {
    this._storageManagerService.setLocalStorage(
      this._User,
      JSON.stringify(user),
    );
    this._storageManagerService.setLocalStorage(this._Token, user.Token);
  }
  private _storeTokens(tokens: Tokens) {
    this._storageManagerService.setLocalStorage(this._Token, tokens.jwt);
    this._storageManagerService.setLocalStorage(
      this._Refresh_Token,
      tokens.refreshToken,
    );
  }

  private _removeTokens() {
    this._storageManagerService.removeItemFromLocalStorage(this._Token);
    this._storageManagerService.removeItemFromLocalStorage(this._Refresh_Token);
  }

  private _decodeJWT(token: Tokens) {
    let decodedHeader = jwt_decode(token.jwt, { header: true });
    let decodedPayload = jwt_decode(token.jwt);
  }

  private _getAccountList$(model: Object): Observable<ApiResponse<any>> {
    return ApiRequest("GET")
      .controller("user")
      .action("accountlist")
      .setBodyModel(model)
      .call(this._globalService);
  }

  public getAccountList(model: Object) {
    this._getAccountList$(model).subscribe(response => {
      const { Data } = response;
      if (Data) {
        this._accountList.next(Data.Account);
      }
    });
  }

  public get SelectedAccountID(): number {
    let user: string = this._storageManagerService.getLocalStorage("User");
    return JSON.parse(user).AccountID ?? 0;
  }
}
