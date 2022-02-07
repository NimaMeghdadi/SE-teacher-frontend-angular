import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParamsHandler } from '@app/core';
import { LabelType } from 'ng5-slider';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter<ParamsHandler>();
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
      professorFirstName: '',
      professorLastName: '',
      rangeSlider: this.resetRengSlider(),
      className: ''
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
    let params = new ParamsHandler();
    params.addParam('fname', this.viewState.professorFirstName);
    params.addParam('lname', this.viewState.professorLastName);
    params.addParam('title', this.viewState.className);
    if (this.viewState.rangeSlider)
      params.addParam('priceFrom', this.viewState.rangeSlider.minValue);
    params.addParam('priceTo', this.viewState.rangeSlider['maxValue']);
    this.onSearch.emit(params);
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
  professorFirstName: string;
  professorLastName: string;
  rangeSlider: RangeSlider,
  className: string
}
interface RangeSlider {
  minValue: number,
  maxValue: number,
  options: object
};