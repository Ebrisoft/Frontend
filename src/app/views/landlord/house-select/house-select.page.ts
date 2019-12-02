import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import LandlordHouseAPIService from "src/app/services/api/landlord/houses-api.service";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";

@Component({
  selector: "app-house-select",
  templateUrl: "./house-select.page.html",
  styleUrls: ["./house-select.page.scss"],
})
export class HouseSelectPage implements OnInit {

  houses: IHouseResponse[];

  constructor(@Inject(LandlordHouseAPIService) private feedAPIService: LandlordHouseAPIService, private router: Router, private location: Location) { }

  async ngOnInit() {
    const response = await this.feedAPIService.getHouses();
    this.houses = response.payload;
    console.log(this.houses);
  }

  routeBack() {
    this.location.back();
  }

  addHouse() {
    //TODO: Add House
    console.log("Add house pressed");
  }
}
