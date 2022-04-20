import LoginService from "./LoginService";
import history from '../../../../@history'

export const ON_GET_USER_CREDENTIALS = 'ON_GET_USER_CREDENTIALS';

export function getUserCredentials(){
    const request = LoginService.getCredentials();
    return(dispatch,getState)=>{
        request.then((response)=>{
            dispatch({
                type:ON_GET_USER_CREDENTIALS,
                payload :response.data
            })
        }).catch((error)=>{
            console.log("error on get user credentials")
        })
    }
}