import { Component, OnInit, Input } from "@angular/core";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";

@Component({
  selector: "app-house-list-item",
  templateUrl: "./house-list-item.component.html",
  styleUrls: ["./house-list-item.component.scss"],
})
export class HouseListItemComponent implements OnInit {

  @Input() house: IHouseResponse;
  constructor() { }

  ngOnInit() {}

}
