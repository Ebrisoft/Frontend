import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginModule } from './Views/login/login.module';

const routes: Routes = [
  {
    path: '',
      loadChildren: () => import('./Views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
