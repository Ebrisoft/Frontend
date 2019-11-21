import APIService from '../api-service';

export default class UnauthAPIService extends APIService {
    constructor(){
        super('unauth/')
    }
}