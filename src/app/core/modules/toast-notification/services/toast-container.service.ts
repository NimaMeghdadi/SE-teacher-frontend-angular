import { DOCUMENT } from "@angular/common";
import {
  Injectable,
  OnDestroy,
  Renderer2,
  ComponentRef,
  RendererFactory2,
  Inject,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
} from "@angular/core";
import { ToastContainerComponent } from "@app/core";

const TOAST_CONTAINER_CLASS_NAME = "toast-container";

@Injectable()
export class ToastContainerService implements OnDestroy {
  private renderer: Renderer2;
  private containerEl: HTMLElement | undefined;
  private componentRef: ComponentRef<ToastContainerComponent> | undefined;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: any,
    private factoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  get ref(): ComponentRef<ToastContainerComponent> | undefined {
    if (!this.componentRef) {
      this._attach();
    }
    return this.componentRef;
  }

  private get containerElement(): HTMLElement | undefined {
    if (!this.containerEl) {
      this.containerEl = this.renderer.createElement("div");
      this.renderer.addClass(this.containerEl, TOAST_CONTAINER_CLASS_NAME);
      this.renderer.appendChild(this.document.body, this.containerEl);
    }
    return this.containerEl;
  }

  ngOnDestroy() {
    this._detach();
    this._destroyContainer();
  }

  private _attach() {
    this._detach();
    const componentFactory = this.factoryResolver.resolveComponentFactory(
      ToastContainerComponent,
    );
    this.componentRef = componentFactory.create(this.injector);
    const hostView = this.componentRef.hostView as EmbeddedViewRef<any>;
    this.appRef.attachView(hostView);
    const rootNode = hostView.rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this.containerElement, rootNode);
  }

  private _detach() {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
  }

  private _destroyContainer() {
    if (this.containerEl && this.containerEl.parentNode) {
      this.renderer.removeChild(this.containerEl.parentNode, this.containerEl);
      this.containerEl = undefined;
    }
  }
}
