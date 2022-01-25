import {
  Input,
  OnInit,
  Output,
  QueryList,
  Component,
  ElementRef,
  EventEmitter,
  ViewChildren,
} from "@angular/core";
import { TwoFactorAuthenticationTypeButton } from "@app/authentication";
import { NgxQrcodeElementTypes } from "@techiediaries/ngx-qrcode";

@Component({
  selector: "app-two-factor-authentication",
  templateUrl: "./two-factor-authentication.component.html",
  styleUrls: ["./two-factor-authentication.component.scss"],
})
export class TwoFactorAuthenticationComponent implements OnInit {
  @Output() onClick: EventEmitter<TwoFactorAuthenticationTypeButton> =
    new EventEmitter();
  elementType = NgxQrcodeElementTypes.CANVAS;
  otpKey = "Techiediaries";
  qrcOTPKey = "testQRC";
  otpKeyInput = "";
  errorMessage = null;
  disabledVerification = true;
  otpVerify = false;
  operationProcess = false;
  @ViewChildren("inputField") inputField: QueryList<ElementRef> | undefined;
  constructor() {}

  ngOnInit() {
    this.requestOptKey();
  }

  requestOptKey() {
    this.operationProcess = true;
  }

  OnClickKeyValidation() {
    this.onClick.emit(TwoFactorAuthenticationTypeButton.onSave);
  }

  onKeyUpOptKey(event: KeyboardEvent, i: number) {
    this.disabledVerification = true;
    if (this.inputField) {
      const keyOnPressed = event.code.slice(0, -1);
      const elements = this.inputField["_results"];
      if (event.code == "Backspace") {
        elements[i].value = "";
        elements[i - 1].nativeElement.focus();
      } else if (
        elements[i + 1] &&
        (keyOnPressed == "Digit" || keyOnPressed == "Numpad")
      ) {
        elements[i].nativeElement.value = event.key;
        elements[i + 1].nativeElement.focus();
      } else {
        this.otpKeyInput = "";
        elements.forEach((item: ElementRef) => {
          this.otpKeyInput += item.nativeElement.value;
        });
        if (this.otpKeyInput.length === 6) {
          this.disabledVerification = false;
        }
      }
    }
  }

  onKeyDownOptKey(event: KeyboardEvent) {
    const allowedList: string[] = ["KeyA", "KeyC", "KeyV", "KeyX"];
    if (
      [46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
      (allowedList.find(item => item == event.code) &&
        (event.ctrlKey || event.metaKey))
    ) {
      return;
    } else if (
      (event.shiftKey || event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  }

  onClickCancle() {
    this.onClick.emit(TwoFactorAuthenticationTypeButton.onCancel);
  }

  removeOtpKeyInput() {
    if (this.inputField) {
      const elements = this.inputField["_results"];
      elements.forEach((item: ElementRef) => {
        item.nativeElement.value = null;
      });
    }
    this.otpKeyInput = "";
  }
}
