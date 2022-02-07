import { AbstractControl } from '@angular/forms';

export function RequireMatch(control: AbstractControl) {
    const selection: any = control.value;
    if (selection === "" || null) {
      return null;
    }
    if (typeof selection === "string" || typeof selection === "number") {
      return { incorrect: true };
    }
    return null;
  }