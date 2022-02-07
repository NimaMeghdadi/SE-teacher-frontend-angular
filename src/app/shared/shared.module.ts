import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ImageSourceDirective } from './directives/image-source.directive';
import { DynamicMatTableModule } from 'dynamic-mat-table';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { HeaderLessTabsDirective } from './directives/header-less-tabs.directive';
import { MenuItemComponent } from './components/action-list/menu-item/menu-item.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

const PIPES = [];
const COMPONENTS = [ActionListComponent, MenuItemComponent];
const DIRECTIVES = [ImageSourceDirective, HeaderLessTabsDirective];

const matModules = [MatIconModule, MatButtonModule, MatTableModule,MatMenuModule,MatCheckboxModule,MatTooltipModule];
@NgModule({
  declarations: [...PIPES, ...DIRECTIVES, ...COMPONENTS],
  imports: [
    CommonModule,
    ...matModules,
    DynamicMatTableModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ],
  entryComponents: [],
  exports: [
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS,
    DynamicMatTableModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  providers: [...PIPES],
})
export class SharedModule {}
