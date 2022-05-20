import LoginService from "./LoginService";
import history from '../../../../@history'
import {setStorageItem } from '../../../../utils/StorageUtils'


export const ON_GET_USER_CREDENTIALS = 'ON_GET_USER_CREDENTIALS';

export function userLogin(data) {
    const request = LoginService.userLogin(data);
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("user Details:", response.data)
            // console.log("status code :", response.status)
            dispatch({
                type: ON_GET_USER_CREDENTIALS,
                payload: response.data
            })
            let userRole = response.data.role
            
        }).catch((error) => {
            console.log("error on get user credentials")
        })
    }
}