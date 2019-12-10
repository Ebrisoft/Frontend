import LandlordBaseAPIService from "./landlord-base-api-service";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import IPhonebookResponse from "src/app/models/response/landlord/phonebook-response.interface";

export default class LandlordPhonebookAPIService {
  
  constructor(private apiService: LandlordBaseAPIService ) {

  }
  
  async getContacts(): Promise<IAPIResponse<IPhonebookResponse[]>> {
    return await this.apiService.post<IPhonebookResponse[]>("getPhonebook", null);
  }
}
