import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IssueFeedPage } from "./issue-feed.page";
import LandlordFeedService from "src/app/services/api/Landlord/feed-service";
import { IssueCardComponent } from "src/app/components/landlord/issue-card/issue-card.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: "", component: IssueFeedPage }])
  ],
  providers: [ LandlordFeedService ],
  declarations: [
    IssueFeedPage,
    IssueCardComponent
  ]
})
export class IssueFeedModule {}
