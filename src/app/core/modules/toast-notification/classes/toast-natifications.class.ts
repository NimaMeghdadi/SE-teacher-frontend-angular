import { Injectable } from "@angular/core";
import { ToastType, ToastConfig } from "../interface";
import { Toaster } from "./toaster.class";

@Injectable()
/**
 * @deprecated since version 1.0.0 use Toaster
 */
export class ToastNotifications {
  constructor(private toaster: Toaster) {}

  /**
   * @deprecated since version 1.0.0
   */
  next(toast: {
    text: string;
    caption?: string;
    type?: ToastType;
    lifetime?: number;
    duration?: number;
  }) {
    const config: ToastConfig = {
      text: toast.text,
      caption: toast.caption,
      type: toast.type,
      duration: toast.duration || toast.lifetime,
      component: undefined,
    };
    this.toaster.open(config);
  }
}
