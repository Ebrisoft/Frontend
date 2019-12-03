import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssueFeedPage } from "./issue-feed.page";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import { IssueCardComponent } from "src/app/components/landlord/issue-card/issue-card.component";
import { PageHeaderModule } from "src/app/components/landlord/page-header/page-header.module";
import { CurrentHouseService } from "src/app/utils/current-house-service";

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
    IssueFeedPage,
    IssueCardComponent
  ]
})
export class IssueFeedModule {}
