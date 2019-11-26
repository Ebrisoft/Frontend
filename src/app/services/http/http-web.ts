import HTTPAbstract from "./http-service";
import IHTTPResponse from "./http-response.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export default class HTTPWeb implements HTTPAbstract {
  async Post(url: string, body: object, headers: any): Promise<IHTTPResponse> {
   
    const result = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });
    
    return {
      body: await result.json(),
      headers: result.headers,
      statusCode: result.status
    };
  }
}
