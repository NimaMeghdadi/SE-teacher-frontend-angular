import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { AuthenticationLayer, OPTKey } from "@app/authentication";

@Component({
  selector: "sdl-otp-key",
  templateUrl: "./otp-key.component.html",
  styleUrls: ["../../shared/assets/shared.scss"],
})
export class OTPKeyComponent extends AuthenticationLayer<OPTKey> {
  constructor() {
    super({
      OTPKey: ["", Validators.required],
    });
  }
}
