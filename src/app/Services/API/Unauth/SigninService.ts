import  UnauthAPIService  from './UnauthAPIService'
import { SigninRequest } from 'src/app/Models/Request/Unauth/SigninRequest'

export default class SigninService {
    
    unauth : UnauthAPIService = new UnauthAPIService()

    SignIn( email : string, password : string ){
        let payload = new SigninRequest(email, password);
        let response = this.unauth.Post('signin', payload)
        console.log(response)
    }
}