import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";
import { IAPIResponse } from "src/app/models/response/api-response.interface";


export default abstract class APIService {
  protected baseURI = "https://efffd37e.ngrok.io/api/v1/";
  protected http: HTTP = new HTTP();
  protected headers = {
    "Content-Type": "application/json"
  };

  constructor(domain: string) {
    this.baseURI += domain;
    this.http.setDataSerializer("json");
  }

  async Post<T>(endpoint: string, payload: object): Promise<IAPIResponse<T>> {
    const response: HTTPResponse = await this.http.post(this.baseURI + endpoint, payload, this.headers);

    return {
      statusCode: response.status,
      errors: response.data.errors,
      payload: response.data.payload
    };
  }
}
