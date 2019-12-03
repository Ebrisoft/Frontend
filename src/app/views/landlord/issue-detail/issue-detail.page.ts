import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";
import LandlordIssueDetailAPIService from "../../../services/api/landlord/issue-detail-api-service";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.page.html",
  styleUrls: ["./issue-detail.page.scss"],
})
export class IssueDetailPage implements OnInit {

  private issue: IIssueResponse;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private landlordIssueDetailAPIService: LandlordIssueDetailAPIService) { 
    const routeState = this.router.getCurrentNavigation().extras.state;

    if (routeState.issue) {
      this.issue = routeState.issue as IIssueResponse;
    } else {
      this.activeRoute.params.subscribe((urlParameters) => {
        this.setIssueById(Number(urlParameters.id));
      });
    }
  }

  ngOnInit() {}

  async setIssueById(id: number) {
    const fetchIssue = await this.landlordIssueDetailAPIService.getIssueById(id);
    if (fetchIssue.statusCode === 200) {
      this.issue = fetchIssue.payload;
    }
  }
}
