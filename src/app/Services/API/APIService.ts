import { HTTP } from "@ionic-native/http/ngx";


export default abstract class APIService {
    protected baseURI = "https://localhost:44378/api/v1/";
    protected http: HTTP = new HTTP();
    protected headers: object = {"Content-Type" : "application/json"};

    constructor(domain: string) {
        this.baseURI += domain;
        this.http.setDataSerializer("json");
    }

    abstract Post(endpoint: string, payload: object): void;
}
