import TenantAPIService from "../tenant/tentant-api-service";
import { ICreateIssueRequest } from "src/app/models/request/tenant/create-issues-request.interface";

export default class CreateIssueService {
  constructor(private apiService: TenantAPIService ) {

  }

  async CreateIssue(title: string, content: string): Promise<void> {
    const payload: ICreateIssueRequest = {
      title: title,
      content: content
    };

    await this.apiService.Post("createissue", payload);
  }
}
