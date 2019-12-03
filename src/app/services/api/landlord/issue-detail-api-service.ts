import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import LandlordBaseAPIService from "./landlord-base-api-service";
import IIssueResponse from "src/app/models/response/landlord/issue-response.interface";

@Injectable()
export default class LandlordIssueDetailAPIService {

  constructor(private apiService: LandlordBaseAPIService) {
    
  }

  async getIssueById(id: number): Promise<IAPIResponse<IIssueResponse>> {
    return await this.apiService.post<IIssueResponse>("getissue", { id: id });
  }
}
