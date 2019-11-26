import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import ActiveRole from "../../active-role";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

@Injectable()
export default class TenantFeedService {

  constructor(private activeRole: ActiveRole) {
    
  }

  async getFeed(): Promise<IAPIResponse<IIssueResponse[]>> {
    return await this.activeRole.APIRequest<IIssueResponse[]>("getfeed");
  }
}
