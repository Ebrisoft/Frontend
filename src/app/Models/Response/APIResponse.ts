export class APIResponse<T>{
    statusCode : Number
    errors : string[]
    payload : T
}