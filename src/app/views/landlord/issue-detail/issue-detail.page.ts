import { Component, OnInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import LandlordIssueAPIService from "../../../services/api/landlord/issue-api-service";
import { Priority } from "src/app/utils/priority.enum";

@Component({
  selector: "app-issue-detail",
  templateUrl: "./issue-detail.page.html",
  styleUrls: ["./issue-detail.page.scss"],
})
export class IssueDetailPage implements OnInit {

  private issue: IIssueResponse;
  private parsedDate: string;
  private secondaryColour: string;
  private priorityDisplay: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private landlordIssueAPIService: LandlordIssueAPIService, private location: Location) { 
    const routeState = this.router.getCurrentNavigation().extras.state;

    if (routeState && routeState.issue) {
      this.issue = routeState.issue as IIssueResponse;
    } else {
      this.activeRoute.params.subscribe((urlParameters) => {
        this.setIssueById(Number(urlParameters.id)).then(() => {
          this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
          this.priorityDisplay = Priority[this.issue.priority];
          this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
        });
      });
    }
  }

  ngOnInit() {
    if (this.issue) {
      this.parsedDate = new Date(this.issue.createdAt).toLocaleString();
      this.priorityDisplay = Priority[this.issue.priority];
      this.secondaryColour = getComputedStyle(document.body).getPropertyValue("--ion-color-secondary").trim().substring(1);
    }
  }

  async setIssueById(id: number) {
    const fetchIssue = await this.landlordIssueAPIService.getIssueById(id);
    if (fetchIssue.statusCode === 200) {
      this.issue = fetchIssue.payload;
    }
  }

  backPressed() {
    this.routeBack();
  }

  routeBack() {
    this.location.back();
  }
}
