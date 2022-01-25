import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";

import { AuthenticationComponent } from "./authentication.component";
import { AuthenticationRouting } from "./authentication.routing";
import {
  ForgotPasswordComponent,
  LoginComponent,
  OTPKeyComponent,
  RegisterComponent,
  TwoFactorAuthenticationComponent,
} from "./components";

const Material_Module = [
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatStepperModule,
  MatCheckboxModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [
    LoginComponent,
    OTPKeyComponent,
    RegisterComponent,
    AuthenticationComponent,
    ForgotPasswordComponent,
    TwoFactorAuthenticationComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    Material_Module,
    NgxQRCodeModule,
    ReactiveFormsModule,
    AuthenticationRouting,
  ],
})
export class AuthenticationModule {
  constructor(){
    console.log('hello');
    
  }
}
