import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'issueFeed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../IssueFeed/issueFeed.module').then(m => m.IssueFeedModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/issueFeed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/issueFeed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
