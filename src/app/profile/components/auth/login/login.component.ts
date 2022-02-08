import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'slp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    UserName: [''],
    Password: [''],
  });
  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onLogin() {
    this.userService.login(this.loginForm.value);
  }
}
