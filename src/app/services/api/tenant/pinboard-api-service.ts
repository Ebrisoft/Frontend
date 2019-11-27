import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import TenantBaseAPIService from "./tentant-base-api-service";
import IPinboardResponse from "src/app/models/response/tenant/pinboard-response.interface";

@Injectable()
export default class TenantPinBoardAPIService {

  constructor(private apiService: TenantBaseAPIService) {
  
  }

  async getPinBoard(): Promise<IAPIResponse<IPinboardResponse>>  {
    return await this.apiService.post<IPinboardResponse>("getPinBoard", null);
  }
}
