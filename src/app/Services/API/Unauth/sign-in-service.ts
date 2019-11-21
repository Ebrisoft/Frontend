import UnauthAPIService from "./unauth-api-service";
import { ISignInRequest } from "src/app/models/request/unauth/sign-in-request.interface";
import { ISignInResponse } from "src/app/models/response/unauth/sign-in-response.interface";
import { IAPIResponse } from "src/app/models/response/api-response.interface";
import { Injectable } from "@angular/core";

@Injectable()
export default class SigninService {
  constructor(public unauth: UnauthAPIService) {

  }

  async SignIn(email: string, password: string): Promise<IAPIResponse<ISignInResponse>> {
    const payload: ISignInRequest = {
      email: email,
      password: password
    };

    return await this.unauth.Post<ISignInResponse>("signin", payload);
  }
}
