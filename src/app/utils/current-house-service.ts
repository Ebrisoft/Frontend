import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import IHouseResponse from "../models/response/landlord/house-response.interface";

@Injectable()
export class CurrentHouseService {

  private houseSource = new BehaviorSubject<IHouseResponse>({id: null, name: "", issues: []});
  currentHouse = this.houseSource.asObservable();

  constructor() {

  }

  changeCurrentHouse(house: IHouseResponse) {
    this.houseSource.next(house);
  }
}
