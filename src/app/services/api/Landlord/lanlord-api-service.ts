import APIService from "../api-service.abstract";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export default class LandlordAPIService extends APIService {
  constructor() {
      super("landlord/");
  }
}
