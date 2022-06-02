import axios from 'axios'
import Constants from '../../../../utils/Constants'

class AdminDashboardService {
  getDataCardDetails() {
    return axios.get(Constants.API_BASE_URL + '/getDataCardDetails')
  }
  getRegisteredUsers(){
    return axios.get(Constants.API_BASE_URL + '/getRegisteredUsers')
  }
  getDeptWiseUserCount() {
    return axios.get(Constants.API_BASE_URL + '/getDeptWiseUserCount')
  }
}

export default new AdminDashboardService()
