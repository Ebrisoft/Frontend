import LandlordBaseAPIService from "./landlord-base-api-service";
import { ICreateIssueRequest } from "src/app/models/request/landlord/create-issues-request.interface";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import IIssueResponse from "src/app/models/response/tenant/issue-response.interface";

export default class LandlordIssueAPIService {
  constructor(private apiService: LandlordBaseAPIService ) {

  }

  async createIssue(title: string, content: string, houseId: number, priority: number): Promise<void> {
    const payload: ICreateIssueRequest = {
      title: title,
      content: content,
      houseId: houseId,
      priority: priority
    };

    await this.apiService.post("createissue", payload);
  }

  async getIssueById(id: number): Promise<IAPIResponse<IIssueResponse>> {
    return await this.apiService.post<IIssueResponse>("getissue", { id });
  }
}
