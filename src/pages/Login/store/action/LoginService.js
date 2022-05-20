import axios from "axios";
import Constants from '../../../../utils/Constants'

class LoginService{
    userLogin(data){
        console.log("data in service",data)
        return axios.post(Constants.API_BASE_URL+'/userLogin',data)
    }
}

export default new LoginService()