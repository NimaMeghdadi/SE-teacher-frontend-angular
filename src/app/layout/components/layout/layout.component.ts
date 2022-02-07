import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LayoutService } from "../../shared/layout.service";
import { toglleButtonInfo } from "../../shared/models/toggleButtons";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  toolbarToggleButtons: toglleButtonInfo[] = [];
  mobileQuery: MediaQueryList;
  toggleMode!: string;
  layoutMode!: any;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public layoutSrvc: LayoutService,
    private router: Router,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 1100px)");
    this.layoutSrvc.initLayout(true);
  }

  ngOnInit() {
    this.layoutSrvc.getSideButtons.subscribe((value) => {
      this.toolbarToggleButtons = value;
    });
    // if (this.toolbarToggleButtons[0] != undefined) {
    //   this.toggleMode = this.toolbarToggleButtons[0].toggleMode;
    // }
  }

  onToggleClick(nav: any, toggleMode: string) {
    if (!nav.opened || this.toggleMode != toggleMode) {
      nav.close();
      this.changeDetectorRef.detectChanges();
      nav.open();
      this.toggleMode = toggleMode;
    } else {
      nav.close();
    }
  }
}
