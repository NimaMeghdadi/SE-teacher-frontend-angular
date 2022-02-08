import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileRoutingComponent } from "../profile/profile-routing.component";
import { ProfessorsListComponent } from "./components/professors-list/professors-list.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileRoutingComponent,
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      {
        path: "list",
        component: ProfessorsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorsRoutingModule {}
