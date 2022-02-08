import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  MyAccountComponent,
  SignupComponent,
  UserProfileComponent,
  VerificationComponent,
} from './components';
import { ProfileRoutingComponent } from './profile-routing.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileRoutingComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'verification',
        component: VerificationComponent,
      },
      {
        path: 'dashboard',
        component: UserProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'my-searches',
          },
          {
            path: 'my-account',
            component: MyAccountComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRouting {}
