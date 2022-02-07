import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarouselItemComponent } from './components/main-page/carousel-item/carousel-item.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatCardModule } from '@angular/material/card';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
];

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MainPageComponent,
    CarouselItemComponent,
  ],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    LayoutRoutingModule,
    RouterModule,
    IvyCarouselModule,
    SharedModule,
  ],
})
export class LayoutModule {}
