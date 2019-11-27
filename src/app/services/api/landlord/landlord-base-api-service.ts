import APIService from "../api-service.abstract";
import { Injectable, Inject } from "@angular/core";
import HTTPAbstract from "../../http/http-service";

@Injectable({
  providedIn: "root"
})
export default class LandlordBaseAPIService extends APIService {
  constructor(@Inject(HTTPAbstract) http: HTTPAbstract) {
    super(http, "landlord/");
  }
}
