import { Component, Inject, OnInit } from "@angular/core";
import LandlordFeedAPIService from "src/app/services/api/landlord/feed-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";
import { Router } from "@angular/router";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/utils/current-house-service";

@Component({
  selector: "app-issue-feed",
  templateUrl: "issue-feed.page.html",
  styleUrls: ["issue-feed.page.scss"]
})
export class IssueFeedPage implements OnInit {

  issues: IIssueResponse[];
  currentHouse: IHouseResponse;

  constructor(@Inject(LandlordFeedAPIService) private feedAPIService: LandlordFeedAPIService, private router: Router, @Inject(CurrentHouseService) private currentHouseService: CurrentHouseService) {
  }

  async ngOnInit() {
    const response = await this.feedAPIService.getFeed();
    this.issues = response.payload;
    this.currentHouseService.currentHouse.subscribe(house => this.currentHouse = house);
  }

  newIssue() {
    this.router.navigate(["landlord/new-issue"]);
    console.log("creating new issue");
  }
  
}
