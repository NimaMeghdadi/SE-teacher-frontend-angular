import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ProfileRoutingComponent } from './profile-routing.component';
import { ProfileRouting } from './profile.routing';
import {
  LoginComponent,
  MyAccountComponent,
  SignupComponent,
  UserProfileComponent,
  VerificationComponent,
} from './components';
import { AuthService, ProfileService } from './shared';
import { RouterModule } from '@angular/router';

const MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatIconModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    ProfileRoutingComponent,
    LoginComponent,
    SignupComponent,
    // ForgotPassComponent,
    VerificationComponent,
    UserProfileComponent,
    // MySearchsComponent,
    // SiegelNewsComponent,
    // LotTrackerComponent,
    // MyAccountComponent,
    // BidderRegistrationComponent,
  ],
  imports: [
    ProfileRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // FormlyModule.forChild(),
    ...MAT_MODULES,
  ],
  providers: [AuthService, ProfileService],
})
export class ProfileModule {}
