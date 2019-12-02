import { Component, OnInit, Input, Inject } from "@angular/core";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";
import { CurrentHouseService } from "src/app/utils/current-house-service";

@Component({
  selector: "app-house-list-item",
  templateUrl: "./house-list-item.component.html",
  styleUrls: ["./house-list-item.component.scss"],
  providers: [ CurrentHouseService ]
})
export class HouseListItemComponent implements OnInit {

  @Input() house: IHouseResponse;
  constructor(private currentHouseService: CurrentHouseService) { }

  ngOnInit() {}

  setCurrentHouse() {
    this.currentHouseService.changeCurrentHouse(this.house);
    console.log("current house set");
  }

}
