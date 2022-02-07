import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainRoutingComponent } from "./components/main-routing/main-routing.component";

const routes: Routes = [
  {
    path: "",
    component: MainRoutingComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRouting {}
