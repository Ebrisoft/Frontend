import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import IHouseResponse from "../../models/response/landlord/house-response.interface";

@Injectable({ providedIn: "root" })
export class CurrentHouseService {

  private subject = new Subject<IHouseResponse>();
  private currentHouse: IHouseResponse;

  setHouse(house: IHouseResponse) {
    this.currentHouse = house;
    this.subject.next(house);
  }

  clearHouse() {
    this.currentHouse = null;
    this.subject.next();
  }

  getSubject(): Observable<IHouseResponse> {
      return this.subject.asObservable();
  }

  getCurrentHouse() {
    return this.currentHouse;
  }
}
