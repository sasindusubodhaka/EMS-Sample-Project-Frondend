import axios from "axios";
import Constants from '../../../../utils/Constants'

class LoginService{
    getCredentials(){
        return axios.get(Constants.API_BASE_URL+'/getUserCredentials/')
    }
}

export default new LoginService()