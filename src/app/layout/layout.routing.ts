import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { MainPageComponent } from "./components/main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: MainPageComponent,
      },
      {
        path: "profile",
        loadChildren: () =>
          import("./../profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "professor",
        loadChildren: () =>
          import("./../professors/professors.module").then(
            (m) => m.ProfessorsModule
          ),
      },
      {
        path: "management",
        loadChildren: () =>
          import("./../management/management.module").then(
            (m) => m.ManagementModule
          ),
      },
      {
        path: "",
        loadChildren: () =>
          import("../class-view/class-view.module").then(
            (m) => m.ClassViewModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
