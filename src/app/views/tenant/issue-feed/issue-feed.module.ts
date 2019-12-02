import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssueFeedPage } from "./issue-feed.page";
import TenantFeedAPIService from "src/app/services/api/tenant/feed-api-service";
import { IssueCardComponent } from "src/app/components/tenant/issue-card/issue-card.component";
import { PageHeaderModule } from "src/app/components/tenant/page-header/page-header.module";

@NgModule({
  imports: [
    PageHeaderModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: IssueFeedPage }])
  ],
  providers: [ TenantFeedAPIService ],
  declarations: [
    IssueFeedPage,
    IssueCardComponent
  ]
})
export class IssueFeedModule {}
