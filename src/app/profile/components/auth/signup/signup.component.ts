import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { Toaster } from 'src/app/core/toast-notification';
import { AuthService } from 'src/app/profile/shared';
import {
  ConfirmPasswordValidator,
  EmailValidator,
  PasswordValidator,
} from '../../../shared/auth.validators';

@Component({
  selector: 'slp-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', [Validators.required, EmailValidator]],
    Password: ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword: ['', [Validators.required, ConfirmPasswordValidator]],
  });
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // this.userService.signup(this.signupForm.value).subscribe((res) => {});
  }

  StartLotCheck(control: AbstractControl, xx) {
    const selection: any = control.value;
    if (selection === '' || null) {
      return null;
    }

    return null;
  }
}
