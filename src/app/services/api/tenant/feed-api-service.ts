import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";
import TenantBaseAPIService from "./tentant-base-api-service";

@Injectable()
export default class TenantFeedService {

  constructor(private apiService: TenantBaseAPIService) {
    
  }

  async getFeed(): Promise<IAPIResponse<IIssueResponse[]>> {
    return await this.apiService.post<IIssueResponse[]>("getfeed", null);
  }
}
