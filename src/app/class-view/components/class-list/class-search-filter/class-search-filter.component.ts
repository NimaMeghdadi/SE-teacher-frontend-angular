import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-class-search-filter',
  templateUrl: './class-search-filter.component.html',
  styleUrls: ['./class-search-filter.component.scss']
})
export class ClassSearchFilterComponent implements OnInit {
  toppings = new FormControl();
  languages = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  languageList: string[] = ['English']; 
  constructor() { }

  ngOnInit(): void {
  }

}
