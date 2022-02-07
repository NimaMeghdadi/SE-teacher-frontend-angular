import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClassViewRoutingComponent } from "./components/class-view-routing/class-view-routing.component";
import { ClassSearchFilterComponent } from "./components/class-search-filter/class-search-filter.component";
import { ClassListComponent } from "./components/class-list/class-list.component";
import { ClassCardComponent } from "./components/class-list/class-card/class-card.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { ClassViewRoutingModule } from "./class-view.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SharedModule } from "@shared/shared.module";

const Material_Module = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    ClassViewRoutingComponent,
    ClassSearchFilterComponent,
    ClassListComponent,
    ClassCardComponent,
  ],
  imports: [
    CommonModule,
    Material_Module,
    ClassViewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SharedModule,
  ],
})
export class ClassViewModule {}
