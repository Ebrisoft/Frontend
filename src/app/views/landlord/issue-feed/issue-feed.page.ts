import { Component, Inject, OnInit } from "@angular/core";
import LandlordFeedService from "src/app/services/api/landlord/feed-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];

  constructor(@Inject(LandlordFeedService) private feedService: LandlordFeedService) {
  }

  async ngOnInit() {
    const response = await this.feedService.getFeed();
    this.issues = response.payload;
  }
}
