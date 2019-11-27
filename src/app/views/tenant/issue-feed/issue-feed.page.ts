import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import TenantFeedAPIService from "src/app/services/api/tenant/feed-api-service";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";


@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];

  constructor(@Inject(TenantFeedAPIService) private feedService: TenantFeedAPIService, private router: Router) {
  }

  async ngOnInit() {
    const response = await this.feedService.getFeed();
    this.issues = response.payload;
  }

  newIssue() {
    this.router.navigate([this.router.url + "/new-issue"]);
    console.log("creating new issue");
  }
}
