import LoginService from "./LoginService";
import { setStorageItem } from '../../../../utils/StorageUtils'
// import { useNavigate } from "react-router-dom";
import History from "../../../../@history";

export const ON_GET_USER_CREDENTIALS = 'ON_GET_USER_CREDENTIALS';

 export const UserLogin=(data)=> {    
    // const navigate = useNavigate();   
    const request = LoginService.userLogin(data);

   
    return (dispatch, getState) => {

       
        request.then((response) => {
            console.log("user Details:", response.data)
            dispatch({
                type: ON_GET_USER_CREDENTIALS,
                payload: response.data
            })
            let userRole = response.data.role
            setStorageItem('user', response.data)
          
            switch (userRole) {
                case 'admin': {
                    History.push('/admin/dashboard')
                    break;
                }
                default :{History.push('/login')}
            }



        }).catch((error) => {
            console.log("error on get user credentials")
        })
    }
}



