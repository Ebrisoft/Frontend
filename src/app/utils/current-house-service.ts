import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import IHouseResponse from "../models/response/landlord/house-response.interface";

@Injectable({ providedIn: "root" })
export class CurrentHouseService {

  private subject = new Subject<any>();

  setHouse(house: IHouseResponse) {
      this.subject.next(house);
  }

  clearHouse() {
      this.subject.next();
  }

  getCurrentHouse(): Observable<any> {
      return this.subject.asObservable();
  }
}
