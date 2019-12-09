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
  viewingResolved: boolean = false;

  constructor(@Inject(TenantFeedAPIService) private feedService: TenantFeedAPIService, private router: Router) {
  }

  async getIssues() {
    const response = await this.feedService.getFeed();
    this.issues = response.payload;
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getIssues();
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.getIssues();
  }

  showOpen() {
    this.viewingResolved = false;
  }
  
  showClosed() {
    this.viewingResolved = true;
  }
  
  newIssue() {
    this.router.navigate(["tenant/new-issue"]);
  }

  viewIssue(issue: IIssueResponse) {
    this.router.navigate(["tenant/issue-detail/" + issue.id], { state: { issue }});
  }
}
