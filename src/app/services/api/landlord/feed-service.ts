import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import LandlordAPIService from "./lanlord-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Injectable()
export default class LandlordFeedService {

  constructor(private apiService: LandlordAPIService) {
    
  }

  async getFeed(): Promise<IAPIResponse<IIssueResponse[]>> {
    return await this.apiService.Post<IIssueResponse[]>("getfeed", null);
  }
}
