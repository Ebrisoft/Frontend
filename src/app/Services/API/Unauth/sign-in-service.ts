import UnauthAPIService from "./unauth-api-service";
import { ISignInRequest } from "src/app/models/request/unauth/sign-in-request.interface";
import { ISignInResponse } from "src/app/models/response/unauth/sign-in-response.interface";
import { IAPIResponse } from "src/app/models/response/api-response.interface";

export default class SigninService {
  unauth: UnauthAPIService = new UnauthAPIService();

  async SignIn(email: string, password: string): Promise<IAPIResponse<ISignInResponse>> {
    const payload: ISignInRequest = {
      username: email,
      password: password
    };

    return await this.unauth.Post<ISignInResponse>("signin", payload);
  }
}
