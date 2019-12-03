import { Component, OnInit, Input,  } from "@angular/core";
import { Location } from "@angular/common";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/utils/current-house-service";

@Component({
  selector: "app-house-list-item",
  templateUrl: "./house-list-item.component.html",
  styleUrls: ["./house-list-item.component.scss"],
})
export class HouseListItemComponent implements OnInit {

  @Input() house: IHouseResponse;
  constructor(private currentHouseService: CurrentHouseService, private location: Location) { }

  ngOnInit() {}

  setCurrentHouse() {
    this.currentHouseService.setHouse(this.house);
    this.routeBack();
  }

  routeBack() {
    this.location.back();
  }

  clearCurrentHouse() {
    this.currentHouseService.clearHouse();
    console.log("cleared House ");
  }

}
