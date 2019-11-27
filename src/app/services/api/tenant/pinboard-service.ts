import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import TenantAPIService from "./tentant-api-service";
import IPinboardResponse from "src/app/models/response/tenant/pinboard-response.interface";

@Injectable()
export default class TenantPinBoardService {

  constructor(private apiService: TenantAPIService) {
  
  }

  async getPinBoard(): Promise<IAPIResponse<IPinboardResponse>>  {
    return await this.apiService.Post<IPinboardResponse>("getPinBoard", null);
  }
}
