import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";
import { IAPIResponse } from "src/app/models/response/api-response.interface";


export default abstract class APIService {
  protected static http: HTTP = new HTTP();
  protected baseURI = "https://localhost:44378/api/v1/";
  protected headers = {
    "Content-Type": "application/json"
  };

  constructor(domain: string) {
    this.baseURI += domain;
    APIService.http.setDataSerializer("json");
  }

  async Post<T>(endpoint: string, payload: object): Promise<IAPIResponse<T>> {
    const response: HTTPResponse = await APIService.http.post(this.baseURI + endpoint, payload, this.headers);

    const data = JSON.parse(response.data);

    return {
      statusCode: response.status,
      errors: data.errors,
      payload: data.payload
    };
  }
}
