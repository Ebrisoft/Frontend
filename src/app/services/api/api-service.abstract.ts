import { IAPIResponse } from "src/app/models/response/api-response.interface";
import HTTPAbstract from "../http/http-service";
import IHTTPResponse from "../http/http-response.interface";

export default abstract class APIService {
  protected baseURI = "https://localhost:44378/api/v1/";
  protected headers = {
    "Content-Type": "application/json"
  };

  constructor(private http: HTTPAbstract, domain: string) {
    this.baseURI += domain;
  }

  async Post<T>(endpoint: string, payload: object): Promise<IAPIResponse<T>> {
    const response: IHTTPResponse = await this.http.Post(this.baseURI + endpoint, payload, this.headers);

    const data = JSON.parse(response.body);

    return {
      statusCode: response.statusCode,
      errors: data.errors,
      payload: data.payload
    };
  }
}
