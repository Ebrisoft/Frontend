import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssueFeedPage } from "./issue-feed.page";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import { IssueCardComponent } from "src/app/components/landlord/issue-card/issue-card.component";
import { PageHeaderModule } from "src/app/components/landlord/page-header/page-header.module";
import { CurrentHouseService } from "src/app/services/observables/current-house-service";
import { FilterIssuesPipe } from "src/app/services/pipes/filter-issues.pipe";

@NgModule({
  imports: [
    PageHeaderModule,
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: IssueFeedPage }])
  ],
  providers: [ 
    LandlordFeedAPIService
  ],
  declarations: [
    FilterIssuesPipe,
    IssueFeedPage,
    IssueCardComponent
  ]
})
export class IssueFeedModule {}
