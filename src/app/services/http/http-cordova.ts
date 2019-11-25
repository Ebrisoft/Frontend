import HTTPAbstract from "./http-service";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";
import IHTTPResponse from "./http-response.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export default class HTTPCordova implements HTTPAbstract {
  private static http: HTTP = new HTTP();

  constructor() {
    HTTPCordova.http.setDataSerializer("json");
  }
  
  async Post(url: string, body: object, headers: any): Promise<IHTTPResponse> {
    const result = await HTTPCordova.http.post(url, body, headers);

    return {
      body: result.data,
      headers: result.headers,
      statusCode: result.status
    };
  }
}
