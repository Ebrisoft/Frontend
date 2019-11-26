import { Component } from "@angular/core";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage {

  mockIssues: IIssueResponse;

  constructor() {
  }

}
