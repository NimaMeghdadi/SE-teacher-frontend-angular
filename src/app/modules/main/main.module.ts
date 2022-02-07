import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainRouting } from "./main.routing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MainRoutingComponent } from "./components/main-routing/main-routing.component";
import { ClassListComponent } from "./components/class-list/class-list.component";
import { ClassCardComponent } from "./components/class-list/class-card/class-card.component";
import { MatCardModule } from "@angular/material/card";
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
    NavbarComponent,
    MainRoutingComponent,
    ClassListComponent,
    ClassCardComponent,
  ],
  imports: [
    CommonModule,
    Material_Module,
    MainRouting,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    SharedModule,
  ],
})
export class MainModule {
  constructor() {
    console.log("hello to main");
  }
}
