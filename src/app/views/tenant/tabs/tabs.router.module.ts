import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "new-issue",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../new-issue/new-issue.module").then(m => m.NewIssuePageModule)
      }
    ]
  },
  {
    path: "issue-detail/:id",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../issue-detail/issue-detail.module").then(m => m.IssueDetailModule)
      }
    ]
  },
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "issue-feed",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../issue-feed/issue-feed.module").then(m => m.IssueFeedModule)
          } 
        ]
      },
      {
        path: "pinboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pinboard/pinboard.module").then(m => m.PinboardPageModule)
          }
        ]
      },
      {
        path: "phonebook",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../phonebook/phonebook.module").then(m => m.PhonebookPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "tabs/issue-feed",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/issue-feed",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
