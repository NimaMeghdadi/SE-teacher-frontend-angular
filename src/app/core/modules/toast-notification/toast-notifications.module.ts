import { CommonModule } from "@angular/common";
import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from "@angular/core";
import {
  Toaster,
  ToastContainerComponent,
  BasicToastContentComponent,
  ToastContentDirective,
  ToastContainerService,
  TOAST_NOTIFICATIONS_CONFIG,
  ToastNotificationsConfig,
} from "@app/core/modules/toast-notification";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ToastContainerComponent,
    BasicToastContentComponent,
    ToastContentDirective,
  ],
  providers: [
    Toaster,
    ToastContainerService,
    { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: {} },
  ],
  entryComponents: [ToastContainerComponent, BasicToastContentComponent],
})
export class ToastNotificationsModule {
  constructor(@Optional() @SkipSelf() parentModule: ToastNotificationsModule) {
    if (parentModule) {
      throw new Error(
        "ToastNotificationsModule is already loaded. Import it in the root module only",
      );
    }
  }

  static forRoot(
    config: ToastNotificationsConfig = {},
  ): ModuleWithProviders<ToastNotificationsModule> {
    return {
      ngModule: ToastNotificationsModule,
      providers: [{ provide: TOAST_NOTIFICATIONS_CONFIG, useValue: config }],
    };
  }
}
