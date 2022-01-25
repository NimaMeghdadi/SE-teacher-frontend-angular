import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastNotificationsModule } from "./modules/toast-notification/toast-notifications.module";
import { AuthGuard, GlobalService } from "./services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, ToastNotificationsModule, HttpClientModule],
  providers: [GlobalService, AuthGuard],
})
export class CoreModule {}
