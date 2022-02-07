import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClassListComponent } from "./components/class-list/class-list.component";
import { MainRoutingComponent } from "./components/main-routing/main-routing.component";

const routes: Routes = [
  {
    path: "",
    component: MainRoutingComponent,
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
export class MainRouting {}
