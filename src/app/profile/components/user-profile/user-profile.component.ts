import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { TabsConfig } from '../../shared';

@Component({
  selector: 'slp-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  tabs: TabsConfig[] = [
    {
      label: 'Siegel News',
      route: '/profile/dashboard/siegel-news',
    },
    {
      label: 'My Searches',
      route: '/profile/dashboard/my-searches',
    },
    {
      label: 'Lot Tracker',
      route: '/profile/dashboard/lot-tracker',
    },
    {
      label: 'My Account',
      route: '/profile/dashboard/my-account',
    },
  ];
  activeLink = this.tabs[1].route;

  constructor(private userService:UserService) {}

  ngOnInit(): void {}

  onLogout() {
    // this.userService.logout();
  }
}
