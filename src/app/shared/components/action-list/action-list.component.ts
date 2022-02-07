import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnChanges,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "action-list",
  templateUrl: "./action-list.component.html",
  styleUrls: ["./action-list.component.scss"],
  animations: [
    trigger("growAnim", [
      state(
        "open",
        style({
          width: "{{hostWidth}}px",
        }),
        { params: { hostWidth: 200 } }
      ),
      state(
        "close",
        style({
          width: "36px",
        })
      ),
      transition("open => close", animate("400ms ease-in-out")),
      transition("close => open", animate("400ms ease-in-out")),
    ]),
  ],
})
export class ActionListComponent implements OnInit, OnChanges {
  @Input() open = true;
  @Output() openChange = new EventEmitter<boolean>();
  @Output() actionClick = new EventEmitter<ActionItem>();
  @HostBinding("@growAnim") get grow() {
    return {
      value: this.open ? "open" : "close",
      params: { hostWidth: this.hostWidth },
    };
  }
  @Input() ActionItemList: ActionItem[] = [];
  @Input() hostWidth: number = null;
  private timer: any = null;

  constructor() {}

  ngOnInit() {
    //    setTimeout( () => { this.openClose_OnClick(this.open); } , 500);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hostWidth && changes.hostWidth.currentValue) {
      setTimeout(() => {
        this.hostWidth = changes.hostWidth.currentValue;
      }, 10);
    }
    if (this.hostWidth === null) {
      this.hostWidth = 200;
    }
  }

  openClose_OnClick(open) {
    this.open = open;
    if (this.timer != null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.openChange.emit(this.open);
    }, 500);
  }

  button_OnClick(e: ActionItem, menu: MatMenuTrigger) {
    if (e.disable === true) {
      return;
    }

    if (menu != null && e.children && e.children.length > 0) {
      menu.openMenu();
    } else {
      this.actionClick.emit(e);
    }
  }

  item_OnClick(e: ActionItem) {
    this.actionClick.emit(e);
  }
}

export interface ActionItem {
  id: number;
  name?: string;
  text: string;
  tooltip?: string;
  matIcon?: string;
  svgIcon?: string;
  children?: ActionItem[];
  multi?: boolean;
  splitter?: boolean;
  disable?: boolean;
  tag?: any;
  hiden?: boolean;
  // Meta Field //
  selected?: any;
}
