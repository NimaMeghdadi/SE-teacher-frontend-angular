import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  carouselData: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.searchSales();
  }

  searchSales() {
    // this.landingPage.searchSales(1).subscribe(({ data }) => {
    //   const { SalePublic } = data;
    //   this.carouselData = SalePublic;
    // });
  }
}
