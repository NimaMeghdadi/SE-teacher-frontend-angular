import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/main/main.module").then((m) => m.MainModule),
  },
  // { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouting {}
