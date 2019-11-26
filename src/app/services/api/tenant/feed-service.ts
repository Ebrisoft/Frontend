import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";
import TenantAPIService from "./tentant-api-service";

@Injectable()
export default class TenantFeedService {

  constructor(private apiService: TenantAPIService) {
    
  }

  async getFeed(): Promise<IAPIResponse<IIssueResponse[]>> {
    return await this.apiService.Post<IIssueResponse[]>("getfeed", null);
  }
}
