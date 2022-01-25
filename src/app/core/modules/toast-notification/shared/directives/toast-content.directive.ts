import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ComponentRef,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";
import { Toast } from "@app/core";

@Directive({
  selector: "[toastContent]",
})
export class ToastContentDirective implements OnInit, OnDestroy {
  @Input()
  toast!: Toast;
  private _componentRef!: ComponentRef<any> | null;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    if (this.toast.component) {
      const componentFactory =
        this._componentFactoryResolver.resolveComponentFactory(
          this.toast.component,
        );
      this._componentRef =
        this._viewContainerRef.createComponent(componentFactory);
      this._componentRef.instance.toast = this.toast;
    }
  }

  ngOnDestroy(): void {
    if (this._componentRef) {
      this._componentRef.destroy();
      this._componentRef = null;
    }
  }
}
