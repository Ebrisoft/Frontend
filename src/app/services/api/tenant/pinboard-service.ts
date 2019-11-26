import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import TenantAPIService from './tentant-api-service';
import IPinBoardResponse from 'src/app/models/response/tenant/pinboard-response.interface';

@Injectable()
export default class TenantPinBoardService {

    constructor(private apiService: TenantAPIService) {
    
    }

    async getPinBoard(): Promise<IAPIResponse<IPinBoardResponse>>  {
        return await this.apiService.Post<IPinBoardResponse>("getPinBoard", null);
    }
}