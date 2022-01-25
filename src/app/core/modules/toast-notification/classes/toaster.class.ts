import { Inject, Injectable, Type } from "@angular/core";
import {
  ToastConfig,
  TOAST_NOTIFICATIONS_CONFIG,
  ToastNotificationsConfig,
} from "../interface";
import { ToastContainerService } from "../services/toast-container.service";
import { Toast } from "./toast.class";
import { BasicToastContentComponent } from "../components";

const DEFAULT_CONFIG: ToastConfig = {
  autoClose: true,
  duration: 2500,
  type: "light",
  position: "bottom-left",
  direction: "rtl",
  component: BasicToastContentComponent,
  preventDuplicates : true
};

@Injectable()
export class Toaster {
  constructor(
    @Inject(TOAST_NOTIFICATIONS_CONFIG)
    private config: ToastNotificationsConfig,
    private containerService: ToastContainerService,
  ) {}

  open(config: ToastConfig): Toast | null;
  open(text: string, config?: ToastConfig): Toast | null;
  open(component: Type<any>, config?: ToastConfig): Toast | null;
  open(
    config: ToastConfig | string | Type<any>,
    componentConfig?: ToastConfig,
  ): Toast | null {
    if (typeof config === "string") {
      config = { text: config as string, ...componentConfig };
    }
    if (config instanceof Type) {
      config = { ...componentConfig, component: config as Type<any> };
    }
    config = { ...DEFAULT_CONFIG, ...this.config, ...config };
    return this.containerService.ref
      ? this.containerService.ref.instance.add(config)
      : null;
  }
}
