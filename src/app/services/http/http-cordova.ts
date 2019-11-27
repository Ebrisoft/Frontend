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
    
  }

  async post(url: string, body: object, headers: any): Promise<IHTTPResponse> {
    
    // const rrresult = await HTTPCordova.http.post(url, body, headers);

    const result: IHTTPResponse = {
      body: "",
      headers: "",
      statusCode: -1
    };

    await HTTPCordova.http.sendRequest(url, {
      method: "post",
      serializer: "json",
      headers: headers,
      data: body
    }).then((res) => {
      result.body = res.data,
      result.headers = res.headers,
      result.statusCode = res.status;
    }).catch((res) => {
      result.body = res.error,
      result.headers = res.headers,
      result.statusCode = res.status;
    });

    return result;
  }
}
