import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRouting } from "./main.routing";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';

const Material_Module = [
  MatToolbarModule,
  MatIconModule,


];


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    Material_Module,
    MainRouting,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    ScrollingModule,
  ]
})
export class MainModule { 

  constructor(){
    console.log('hello to main');
    
  }
  
}
