import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SelectedTab } from "../enums";

@Directive()
export abstract class AuthenticationLayer<T> {
  @Input() errorMessage: string = "";
  @Output() tabChange = new EventEmitter<SelectedTab>();
  @Output() formSubmission: EventEmitter<T> = new EventEmitter<T>();
  form: FormGroup = new FormGroup({});
  formBuilder = new FormBuilder();

  
  constructor(model: any) {
    this.form = this.formBuilder.group(model);
  }

  onKeyDown({ code }: KeyboardEvent) {
    if (code == "Enter" || code == "NumpadEnter") {
      this.onSubmitFrom();
    }
  }

  onSubmitFrom() {
    this.formSubmission.emit(this.form.value);
  }
}
