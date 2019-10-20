import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabOne',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tabOne/tabOne.module').then(m => m.TabOnePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tabOne',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabOne',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
