import { Injectable } from "@angular/core";
import LandlordBaseAPIService from "./landlord-base-api-service";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import IHouseResponse from "src/app/models/response/landlord/house-response.interface";

@Injectable()
export default class LandlordHouseAPIService {

  constructor(private apiService: LandlordBaseAPIService) {
    
  }

  async getHouses(): Promise<IAPIResponse<IHouseResponse[]>> {
    return await this.apiService.post<IHouseResponse[]>("gethouses", null);
  }
}
