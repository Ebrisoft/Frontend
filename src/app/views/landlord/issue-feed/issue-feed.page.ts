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
  isFiltered: boolean;
  issues: IIssueResponse[];
  filteredIssues: IIssueResponse[];
  currentHouse: IHouseResponse;
  subscription: Subscription;

  constructor(@Inject(LandlordFeedAPIService) private feedAPIService: LandlordFeedAPIService, private router: Router, private currentHouseService: CurrentHouseService) {
    this.subscription = this.currentHouseService.getCurrentHouse().subscribe(currentHouse => {
      if (currentHouse) {
        this.currentHouse = currentHouse;
        this.filteredIssues = this.issues.filter((element, index, array) => element.house.id === this.currentHouse.id);
        this.isFiltered = true;
        this.pageTitle = "Issues in " + this.currentHouse.name;
      } else {
        this.currentHouse = {id: null, name: "", issues: []};
        this.isFiltered = false;
        this.pageTitle = "Issues in All Houses";
      }
    });
    this.currentHouseService.clearHouse();
  }

  async ngOnInit() {
    const response = await this.feedAPIService.getFeed();
    this.issues = response.payload;
  }

  newIssue() {
    this.router.navigate(["landlord/new-issue"]);
    console.log("creating new issue");
  }
  
}
