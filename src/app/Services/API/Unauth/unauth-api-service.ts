import APIService from '../APIService';

export default class UnauthAPIService  extends APIService {
    constructor(){
        super('unauth/')
    }

    Post(endpoint: string, payload: Object): void {
       this.http.post(this.baseURI + endpoint, payload, this.headers)
    }
}