import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
      loadChildren: () => import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "tenant",
      loadChildren: () => import("./views/tenant/tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "landlord",
      loadChildren: () => import("./views/landlord/tabs/tabs.module").then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
