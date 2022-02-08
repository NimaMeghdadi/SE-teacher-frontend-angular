import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): ValidationErrors {
  // Validates Persian phone numbers
  if (control.pristine) {
    return null;
  }
  const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  control.markAsTouched();
  if (PASSWORD_REGEXP.test(control.value)) {
    return null;
  }
  return {
    invalidPassword: true,
  };
}

export const EmailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control || !control.value) {
    return null;
  }
  const EMAIL_REGEXP =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (EMAIL_REGEXP.test(control.value)) {
    return null;
  } else {
    return {
      invalidEmail: true,
    };
  }
};

export const ConfirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control.parent || !control) {
    return null;
  }

  const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const password = control.parent.get('Password');
  const passwordConfirm = control.parent.get('ConfirmPassword');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};

// export function PhoneNumberValidator(
//   control: AbstractControl,
// ): ValidationErrors | null {
//   // Validates Persian phone numbers
//   if (control.pristine) {
//     return null;
//   }
//   if (control.value == "") {
//     return null;
//   }
//   const PHONE_REGEXP = /^(\+98|0)?9\d{9}$/;
//   control.markAsTouched();
//   if (PHONE_REGEXP.test(control.value)) {
//     return null;
//   }
//   return {
//     invalidPhoneNumber: true,
//   };
// }
