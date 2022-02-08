import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ManagementRoutingComponent } from "./components/management-routing/management-routing.component";
import { UsersManagementComponent } from "./components/users-management/users-management.component";

const routes: Routes = [
  {
    path: "",
    component: ManagementRoutingComponent,
    children: [
      { path: "", redirectTo: "users", pathMatch: "full" },
      {
        path: "users",
        component: UsersManagementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
