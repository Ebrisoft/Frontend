import { ISignInRequest } from "src/app/models/request/unauth/sign-in-request.interface";
import { ISignInResponse } from "src/app/models/response/unauth/sign-in-response.interface";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";
import UnauthBaseAPIService from "./unauth-base-api-service";

@Injectable()
export default class SigninAPIService {
  constructor(private apiService: UnauthBaseAPIService) {

  }

  async SignIn(email: string, password: string): Promise<IAPIResponse<ISignInResponse>> {
    const payload: ISignInRequest = {
      email: email,
      password: password
    };
    
    return await this.apiService.Post<ISignInResponse>("signin", payload);
  }
}
