import TenantBaseAPIService from "./tentant-base-api-service";
import { ICreateIssueRequest } from "src/app/models/request/tenant/create-issues-request.interface";

export default class TenantCreateIssueAPIService {
  constructor(private apiService: TenantBaseAPIService ) {

  }

  async CreateIssue(title: string, content: string): Promise<void> {
    const payload: ICreateIssueRequest = {
      title: title,
      content: content
    };

    await this.apiService.Post("createissue", payload);
  }
}
