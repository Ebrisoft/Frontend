import TenantBaseAPIService from "./tentant-base-api-service";
import { ICreateIssueRequest } from "src/app/models/request/tenant/create-issues-request.interface";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

export default class TenantIssueAPIService {
  constructor(private apiService: TenantBaseAPIService ) {

  }

  async createIssue(title: string, content: string): Promise<void> {
    const payload: ICreateIssueRequest = {
      title: title,
      content: content
    };

    await this.apiService.post("createissue", payload);
  }

  async getIssueById(id: number): Promise<IAPIResponse<IIssueResponse>> {
    return await this.apiService.post<IIssueResponse>("getissue", { id });
  }

  async closeIssue(id: number): Promise<void> {
    await this.apiService.post<IIssueResponse>("archive", { id });
  }
}
