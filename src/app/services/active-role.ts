import UnauthApiService from "./api/unauth/unauth-api-service";
import LandlordApiService from "./api/Tenant/tentant-api-service";
import TenantApiService from "./api/Landlord/lanlord-api-service";
import APIService from "./api/api-service.abstract";
import { IAPIResponse } from "../models/response/api-response.interface";
import { Role } from "../models/utils/role.enum";
import { Injectable } from "@angular/core";

@Injectable({ 
  providedIn: "root"
})
export default class ActiveRole {

  private currentService: APIService;
  private currentRole: Role;

  constructor(private unauthApiService: UnauthApiService, 
    private landlordApiService: LandlordApiService, 
    private tenantApiService: TenantApiService) {
    this.setRole(Role.DEFAULT);
  }

  public getRole(): Role {
    return this.currentRole;
  }

  public setRole(role: Role) {
    this.currentRole = role;
    switch (role) {
      case Role.TENANT:
        this.currentService = this.tenantApiService;
        break;
      case Role.LANDLORD:
        this.currentService = this.landlordApiService;
        break;
      default:
        this.currentService = this.unauthApiService;
        break;
    }
  }

  async APIRequest<T>(endpoint: string, payload: object = null): Promise<IAPIResponse<T>> {
    return this.currentService.Post<T>(endpoint, payload);
  }

}

