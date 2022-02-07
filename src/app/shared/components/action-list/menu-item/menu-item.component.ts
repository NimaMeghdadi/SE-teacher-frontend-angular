import {Component, Input, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import { ActionItem } from '../action-list.component';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styles: [`
  .active-button{
    background-color: #795548 !important;
    color: white;
  }

  .active-button mat-icon{
    color: white;
  }
  `]
})
export class MenuItemComponent implements OnInit {
  @Input() items: ActionItem[];
  @Input() multi: boolean;
  @Output() actionClick = new EventEmitter<ActionItem>();
  @ViewChild('childMenu', { static: true }) public childMenu;

  constructor(public router: Router) {
    this.multi = false;
  }

  ngOnInit() {
  }

  item_onClick(item, e = null) {
    if (e !== null) {
      this.actionClick.emit(item);
    }
    e.stopPropagation();
  }

  item_onChange(item, e = null) {
    item.selected =  e.checked
    if (e !== null) {
      this.actionClick.emit(item);
    }
  }

}
