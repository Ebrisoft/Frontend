import { Component, Inject, OnInit, Input } from "@angular/core";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import { Router } from "@angular/router";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/services/observables/current-house-service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  pageTitle: string;
  issues: IIssueResponse[];
  currentHouse: IHouseResponse;
  subscription: Subscription;

  constructor(@Inject(LandlordFeedAPIService) private feedAPIService: LandlordFeedAPIService, private router: Router, private currentHouseService: CurrentHouseService) {
    this.currentHouse = this.currentHouseService.getCurrentHouse();
    this.setPageTitle(this.currentHouse); 
    this.subscription = this.currentHouseService.getSubject().subscribe(currentHouse => {
      this.setPageTitle(currentHouse);
    });
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

  setPageTitle(currentHouse) {
    if (currentHouse) {
      this.currentHouse = currentHouse;
      this.pageTitle = "Issues in " + this.currentHouse.name;
    } else {
      this.currentHouse = null;
      this.pageTitle = "Issues in All Houses";
    }
  }

  newIssue() {
    this.router.navigate(["landlord/new-issue"]);
  }
  
  viewIssue(issue: IIssueResponse) {
    this.router.navigate(["landlord/issue-detail/" + issue.id], { state: { issue }});
  }
}
