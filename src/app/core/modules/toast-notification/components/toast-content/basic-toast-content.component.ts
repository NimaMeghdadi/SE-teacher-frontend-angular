import { Component, Input } from "@angular/core";
import { Toast } from "@app/core";

@Component({
  templateUrl: "./basic-toast-content.component.html",
  styleUrls: ["./basic-toast-content.component.scss"],
})
export class BasicToastContentComponent {
  @Input()
  toast!: Toast;
}
