import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import LandlordBaseAPIService from "./landlord-base-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Injectable()
export default class LandlordFeedAPIService {

  constructor(private apiService: LandlordBaseAPIService) {
    
  }

  async getFeed(): Promise<IAPIResponse<IIssueResponse[]>> {
    return await this.apiService.post<IIssueResponse[]>("getfeed", null);
  }
}
