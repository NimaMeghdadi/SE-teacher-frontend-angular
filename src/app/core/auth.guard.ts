import { Injectable, ErrorHandler } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from "@angular/router";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { GlobalService } from "./services/global.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (this.router.url !== "/profile/login" && err.status === 401) {
              localStorage.removeItem("Token");
              this.router.navigate(["/profile/login"]);
            }
            this.errorHandler.handleError(err);
          }
        }
      )
    );
  }

  constructor(private router: Router, public errorHandler: ErrorHandler) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let Token = localStorage.getItem("Token");
    if (Token) {
      return true;
    }
    this.router.navigate(["/profile/login"]);
    return false;
  }
}
