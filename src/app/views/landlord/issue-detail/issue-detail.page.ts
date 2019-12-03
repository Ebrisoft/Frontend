import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.page.html",
  styleUrls: ["./issue-detail.page.scss"],
})
export class IssueDetailPage implements OnInit {

  private issue: IIssueResponse;

  constructor(private router: Router, private activeRoute: ActivatedRoute) { 
    const routeState = this.router.getCurrentNavigation().extras.state;

    if (routeState.issue) {
      this.issue = routeState.issue as IIssueResponse;
    } else {
      this.activeRoute.params.subscribe((urlParameters) => {
        this.setIssueById(urlParameters.id);
      });
    }
  }

  ngOnInit() {}

  setIssueById(id) {
    console.log("Fetching on: " + id);
  }
}
