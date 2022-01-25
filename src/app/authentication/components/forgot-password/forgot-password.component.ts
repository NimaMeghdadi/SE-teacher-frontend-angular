import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthenticationLayer, ForgotPass } from "@app/authentication";

@Component({
  selector: "sdl-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["../../shared/assets/shared.scss"],
})
export class ForgotPasswordComponent extends AuthenticationLayer<ForgotPass> {
  constructor() {
    super({
      Email: ["", [Validators.email, Validators.required]],
    });
  }
}
