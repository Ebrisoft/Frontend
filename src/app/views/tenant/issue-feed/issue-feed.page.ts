import { Component, OnInit, Inject } from "@angular/core";
import TenantFeedService from "src/app/services/api/tenant/feed-service";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];

  constructor(@Inject(TenantFeedService) private feedService: TenantFeedService) {
  }

  async ngOnInit() {
    const response = await this.feedService.getFeed();
    this.issues = response.payload;
  }
}