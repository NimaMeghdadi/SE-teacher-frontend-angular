import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Register, ForgotPass, Login, OPTKey, LoginWithToken } from "./index";
import { AuthService } from "./services";
import { SelectedTab, TwoFactorAuthenticationTypeButton } from "./shared/enums";

@Component({
  selector: "sdl-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.scss"],
})
export class AuthenticationComponent {
  @ViewChild("loginCard") loginCard: ElementRef | undefined;
  selectedTab = SelectedTab.LoginUser;
  errorMessage: string = "test";
  loginWithToken: boolean = false;

  constructor(
    private _renderer: Renderer2,
    private _authService: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {
    console.log('hamid');
    
    this._loginWithToken(this._activatedRoute.snapshot.queryParams);
  }

  loginFormSubmission(loginModel: Login) {
    //TODO: send request and delete console.log
    // this._changeTabAnimation("700px");
    this._authService.login(loginModel);
  }

  forgotPassFormSubmission(forgotModel: ForgotPass) {
    //TODO: send request and delete console.log
    console.log(forgotModel);
  }
  registerFormSubmission(registerModel: Register) {
    //TODO: send request and delete console.log
    console.log(registerModel);
  }

  OTPKeyFormSubmission(OPTKeyModel: OPTKey) {
    //TODO: send request and delete console.log
    console.log(OPTKeyModel);
  }

  twoFactorFormSubmission(event: TwoFactorAuthenticationTypeButton) {
    if (event == TwoFactorAuthenticationTypeButton.onCancel) {
      this.selectedTab = SelectedTab.LoginUser;
      this._changeTabAnimation("300px");
    } else {
      //TODO: login or other ...
    }
  }

  private _changeTabAnimation(widthChange: "700px" | "300px") {
    this._renderer.setStyle(
      this.loginCard?.nativeElement,
      "width",
      widthChange,
    );
    this._renderer.setStyle(
      this.loginCard?.nativeElement,
      "animation",
      widthChange == "700px" ? "slideForward 500ms" : "slideBack 500ms",
    );
  }

  private _loginWithToken(params: Params) {
    const { token, ApplicationID } = params;
    if (token && token != "undefined") {
      this.selectedTab = SelectedTab.LoginWithToken;
      let loginWithToken: LoginWithToken = {
        GUID: token,
        ApplicationID: ApplicationID,
      };
      this._authService.login(loginWithToken);
      return;
    } else {
      this.selectedTab = SelectedTab.LoginUser;
      this._router.navigate(["./login"]);
    }
  }
}
