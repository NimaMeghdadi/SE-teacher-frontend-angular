import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@app/core/services/user.service";
import { Login,LoginWithToken } from "../shared/interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private router: Router,
  ) {}

  login(user: Login | LoginWithToken) {
    this._userService.login(user);
    this.router.navigate(["./dashboard"]);
  }
}
