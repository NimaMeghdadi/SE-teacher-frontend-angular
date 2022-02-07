import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassListComponent } from "./components/class-list/class-list.component";
import { ClassViewRoutingComponent } from "./components/class-view-routing/class-view-routing.component";

const routes: Routes = [
  {
    path: "",
    component: ClassViewRoutingComponent,
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      {
        path: "list",
        component: ClassListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassViewRoutingModule {}
