import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { ProfessorRoutingComponent } from "./components/professor-routing/professor-routing.component";
import { ProfessorsListComponent } from "./components/professors-list/professors-list.component";
import { ProfessorsRoutingModule } from "./professors.routing";

const MAT_MODULES = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTabsModule,
];

@NgModule({
  declarations: [ProfessorRoutingComponent, ProfessorsListComponent],
  imports: [
    ...MAT_MODULES,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ProfessorsRoutingModule,
  ],
})
export class ProfessorsModule {}
