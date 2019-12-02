import LandlordBaseAPIService from "./landlord-base-api-service";
import { ICreateIssueRequest } from "src/app/models/request/landlord/create-issues-request.interface";

export default class LandlordCreateIssueAPIService {
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
}
