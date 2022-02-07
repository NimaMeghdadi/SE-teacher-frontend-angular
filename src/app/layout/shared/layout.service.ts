import { Injectable } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Assistant } from "@shared/Assistant";
import { BehaviorSubject, Observable } from "rxjs";
import { toglleButtonInfo } from "./models/toggleButtons";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  private SideButttons$: BehaviorSubject<Array<toglleButtonInfo>>;
  private RightSideButttons$: BehaviorSubject<Array<toglleButtonInfo>>;
  private rightSidebarShown$: BehaviorSubject<boolean>;
  private selectStep$: BehaviorSubject<number>;
  sideToggleButtons: Array<toglleButtonInfo> = [];
  rightSideToggleButtons!: Array<toglleButtonInfo>;
  isAdmin: boolean = false;

  sellerToggleMenus: Array<toglleButtonInfo> = [
    {
      title: "searchSide",
      icon: "search",
      toggleMode: "search",
    },
    {
      title: "info",
      icon: "info",
      toggleMode: "info",
    },
  ];

  adminToggleMenus: Array<toglleButtonInfo> = [
    {
      title: "info",
      icon: "info",
      toggleMode: "info",
    },
  ];

  rightSiderBarToggleMenus: toglleButtonInfo[] = [
    {
      title: "comment",
      icon: "comment",
      toggleMode: "comment",
    },
  ];

  rightSidebarAllowedRoute: string[] = [
    "/seller/lot-definition/stepper",
    "/admin/lot-approve/stepper",
  ];

  constructor(private activatedRoute: Router) {
    this.selectStep$ = new BehaviorSubject<number>(1);
    this.SideButttons$ = new BehaviorSubject<Array<toglleButtonInfo>>([]);
    this.RightSideButttons$ = new BehaviorSubject<Array<toglleButtonInfo>>([]);
    this.rightSidebarShown$ = new BehaviorSubject<boolean>(true);
    this.activatedRoute.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        if (this.rightSidebarAllowedRoute.includes(res.url.split("?")[0])) {
          this.rightSidebarShown$.next(true);
        } else {
          this.rightSidebarShown$.next(false);
        }
      }
    });
  }

  public get getSelectedStep(): Observable<any> {
    return this.selectStep$.asObservable();
  }

  public set setSelectedStep(value: number) {
    this.selectStep$.next(value);
  }

  public get rightSideBarShown(): Observable<boolean> {
    return this.rightSidebarShown$.asObservable();
  }

  public get getSideButtons(): Observable<toglleButtonInfo[]> {
    return this.SideButttons$.asObservable();
  }

  public get rightSideButtons(): Observable<toglleButtonInfo[]> {
    return this.RightSideButttons$.asObservable();
  }

  public initSideButtons(isAdmin: boolean) {
    if (isAdmin) {
      this.sideToggleButtons = [...this.adminToggleMenus];
    } else {
      this.sideToggleButtons = [...this.sellerToggleMenus];
    }
    this.SideButttons$.next(this.sideToggleButtons);
    this.RightSideButttons$.next(this.rightSiderBarToggleMenus);
  }

  public initLayout(isAdmin: boolean) {
    this.initSideButtons(isAdmin);
    Assistant.onChooseNavItem(isAdmin);
    this.isAdmin = isAdmin;
  }

  InsertSideButtton(
    buttonName?: string,
    buttonConfig?: toglleButtonInfo,
    unshift?: boolean,
    data?: any
  ) {
    if (unshift && buttonConfig) {
      this.sideToggleButtons.unshift(buttonConfig);
    } else {
      if (buttonConfig) this.sideToggleButtons.push(buttonConfig);
    }
    this.SideButttons$.next(this.sideToggleButtons);
  }

  RemoveSideButtton(toggleKind: string) {
    for (let index = 0; index < this.sideToggleButtons.length; index++) {
      if (this.sideToggleButtons[index].toggleMode == toggleKind) {
        this.sideToggleButtons.splice(index, 1);
        this.SideButttons$.next(this.sideToggleButtons);
        break;
      }
    }
  }
}
