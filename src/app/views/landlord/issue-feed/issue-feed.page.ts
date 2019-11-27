import { Component, Inject, OnInit } from "@angular/core";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];

  constructor(@Inject(LandlordFeedAPIService) private feedAPIService: LandlordFeedAPIService) {
  }

  async ngOnInit() {
    const response = await this.feedAPIService.getFeed();
    this.issues = response.payload;
  }
}
