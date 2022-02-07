import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
// import { ApplicationNavigator, User } from 'src/app/core';
// import { UserService } from 'src/app/core/services/user.service';
import { NavbarItem, NAVBAR_CONFIG as navbarConfig } from '../../shared';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarItems = navbarConfig;
  currentRoute!: string;
  navItemsPos: any[] = [];

  constructor(private userService: UserService, private router: Router) {
    router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.currentRoute = res.url.split('/')[1];
      }
    });
    // this.checkToken();
  }

  ngOnInit(): void {}

  setItemPos() {
    let temp = document.querySelectorAll('#nav-item');
    if (temp) {
      let list:any = [];
      temp.forEach((el) => {
        list.push(el.getBoundingClientRect());
      });
      this.navItemsPos = list;
    }
  }

  // checkToken() {
  //   const isNullOrUndefined = (value): boolean => {
  //     if (value === null || value === undefined) return false;
  //     else return true;
  //   };

  //   let token = localStorage.getItem('Token');
  //   let user: User = JSON.parse(localStorage.getItem('User'));
  //   this.userService.activeUser = user;
  //   if (isNullOrUndefined(token)) {
  //     this.userService.loggedIn = true;
  //   }
  // }

  // onCustomerRouteChange(routeItem: NavbarItem) {
  //   ApplicationNavigator()
  //     .appendToken(true)
  //     .baseDestination('deploy')
  //     .destinationApplication('BackOffice')
  //     .windowTarget('_self')
  //     .addParams({ Page: routeItem.route })
  //     .startIntegration();
  // }

  // onActionClick() {
  //   ApplicationNavigator()
  //     .appendToken(true)
  //     .baseDestination('deploy')
  //     .destinationApplication('BackOffice')
  //     .windowTarget('_self')
  //     .addParams({ Page: 'admin/lot-approve/review-table' })
  //     .startIntegration();
  // }
}
