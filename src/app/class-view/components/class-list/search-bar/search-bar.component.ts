import { Component, EventEmitter, Output } from '@angular/core';
import { LabelType } from 'ng5-slider';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<{ [key: string]: string | number }>();
  expandable = true;
  showSearchHeader = true;
  state = false;
  clickOnExportBTN = false;
  priceRange: Array<string> = [];

  viewState!: Params;
  max_price: number = 1000000

  constructor(private gs: GlobalService) {
    this.clearViewState()
  }

  clearViewState() {
    this.viewState = {
      fname: '',
      lname: '',
      rangeSlider: this.resetRengSlider(),
      title: ''
    }
  }

  expansion_onOpen(sender: any) {
    if (
      this.expandable == false &&
      sender.expanded != false &&
      this.state == false
    ) {
      sender.close();
    }
    if (this.clickOnExportBTN) {
      sender.close();
      this.clickOnExportBTN = false;
    }

    if (this.expandable != false && sender.expanded != false) {
      this.showSearchHeader = false;
    }
  }

  expansion_onClose(sender: any) {
    if (
      this.expandable == false &&
      sender.expanded == false &&
      this.state == true
    ) {
      this.showSearchHeader = true;
      sender.open();
    }

    if (this.expandable != false && sender.expanded == false) {
      this.showSearchHeader = true;
    }
  }


  OnSearchByFilter() {
    let model: { [key: string]: string | number } = {
      fname: this.viewState.fname,
      lname: this.viewState.lname,
      title: this.viewState.title,
      priceFrom: this.viewState.rangeSlider.minValue,
      priceTo: this.viewState.rangeSlider.maxValue
    }
    this.onSearch.emit(model);
  }

  OnClearFilter() { }

  resetRengSlider(): RangeSlider {
    return {
      minValue: 0,
      maxValue: this.max_price,
      // maxValue: Number(this.searchData.maxPrice),
      options: {
        floor: 0,
        ceil: this.max_price,
        // ceil: this.searchData.maxPrice,
        translate: (value: number, label: LabelType): string => {
          switch (label) {
            case LabelType.Low:
              return '<b>Min price:</b> $' + value;
            case LabelType.High:
              return '<b>Max price:</b> $' + value;
            default:
              return '$' + value;
          }
        }
      },
    };
  }
}
interface Params {
  fname: string;
  lname: string;
  rangeSlider: RangeSlider,
  title: string
}
interface RangeSlider {
  minValue: number,
  maxValue: number,
  options: object
};