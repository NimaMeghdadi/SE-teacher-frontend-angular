import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private readonly _userService: UserService) {}

  canActivate(): boolean {
    return this._userService.isLoggedIn();
  }
}
