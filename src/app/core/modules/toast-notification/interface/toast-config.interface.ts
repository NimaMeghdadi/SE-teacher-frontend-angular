import { ToastNotificationsConfig } from ".";

export interface ToastConfig extends ToastNotificationsConfig {
  text?: string;
  caption?: string;
}
