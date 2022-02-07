import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slp-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  @Input() sale: any;

  constructor() {}

  ngOnInit(): void {}
}
