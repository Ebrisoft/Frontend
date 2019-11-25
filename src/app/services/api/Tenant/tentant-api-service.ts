import APIService from "../api-service.abstract";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export default class TenantAPIService extends APIService {
  constructor() {
      super("tenant/");
  }
}
