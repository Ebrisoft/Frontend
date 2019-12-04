import TenantBaseAPIService from "./tentant-base-api-service";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import IPhonebookResponse from "src/app/models/response/tenant/phonebook-response.interface";

export default class TenantPhonebookAPIService {
  
  constructor(private apiService: TenantBaseAPIService ) {

  }
  
  async getContacts(): Promise<IAPIResponse<IPhonebookResponse[]>> {
    return await this.apiService.post<IPhonebookResponse[]>("getPhonebook", null);
  }
}
