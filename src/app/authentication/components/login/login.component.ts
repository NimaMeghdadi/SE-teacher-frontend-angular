import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthenticationLayer, Login } from "@app/authentication";

@Component({
  selector: "sdl-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss", "../../shared/assets/shared.scss"],
})
export class LoginComponent extends AuthenticationLayer<Login> {
  constructor() {
    super({
      Username: ["", Validators.required],
      Password: ["", Validators.required],
    });
  }
}
