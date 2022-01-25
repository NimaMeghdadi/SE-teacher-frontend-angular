import { Validators } from "@angular/forms";
import { Component, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { AuthenticationLayer, Register } from "@app/authentication";

@Component({
  selector: "sdl-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss", "../../shared/assets/shared.scss"],
})
export class RegisterComponent extends AuthenticationLayer<Register> {
  @ViewChild("password") password: ElementRef | undefined;
  @ViewChild("confirmPassword") confirmPassword: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
    super({
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      Email: ["", [Validators.email, Validators.required]],
      Password: ["", Validators.required],
      ConfirmPassword: ["", Validators.required],
    });
  }

  passwordValidation(pass: string, confirmPass: string) {
    this.renderer.setStyle(this.password?.nativeElement, "display", "none");
    this.renderer.setStyle(
      this.confirmPassword?.nativeElement,
      "display",
      "none",
    );
    let regexp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/,
    );

    if (regexp.test(pass)) {
      this.renderer.setStyle(this.password?.nativeElement, "display", "block");
      if (pass == confirmPass) {
        this.renderer.setStyle(
          this.confirmPassword?.nativeElement,
          "display",
          "block",
        );
      }
    }
  }
}
