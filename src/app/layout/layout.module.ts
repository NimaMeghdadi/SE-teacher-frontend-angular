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
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';

const MAT_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDividerModule,
  MatExpansionModule
];

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, MainPageComponent, ProjectInfoComponent],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    LayoutRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class LayoutModule {}
