import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'issue-feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Views/issue-feed/issue-feed.module').then(m => m.IssueFeedModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/issue-feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/issue-feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
