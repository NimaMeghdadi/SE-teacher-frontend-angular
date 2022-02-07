import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageSourceDirective } from "./directives/image-source.directive";

// const MAT_MODULES = [];

// const COMPONENTS = [];

// const MODULES = [];

const DIRECTIVES = [ImageSourceDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  entryComponents: [],
  exports: [...DIRECTIVES],
  providers: [],
})
export class SharedModule {}
