import { Component, Inject, OnInit } from "@angular/core";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];

  constructor(@Inject(LandlordFeedAPIService) private feedAPIService: LandlordFeedAPIService, private router: Router) {
  }

  async getIssues() {
    const response = await this.feedAPIService.getFeed();
    this.issues = response.payload;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getIssues();
      event.target.complete();
    }, 1000);
  }

  async ngOnInit() {
    this.getIssues();
  }

  newIssue() {
    this.router.navigate(["landlord/new-issue"]);
  }
}
