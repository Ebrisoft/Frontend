import { HTTP } from '@ionic-native/http/ngx'


export default abstract class APIService {
    protected baseURI: string = 'https://localhost:44378/api/v1/'
    protected http : HTTP = new HTTP();
    protected headers: Object = {'Content-Type' : 'application/json'}

    constructor(domain : string) {
        this.baseURI += domain
    }

    abstract Post(endpoint : string, payload : Object ) : void
}