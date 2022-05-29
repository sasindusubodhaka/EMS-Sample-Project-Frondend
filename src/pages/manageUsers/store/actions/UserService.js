import axios from 'axios'
import Constants from '../../../../utils/Constants'

class UserService {
  saveUser(user) {
    return axios.post(Constants.API_BASE_URL + '/addUser', user)
  }

  // getDoctors() {
  //   return axios.get(Constants.API_BASE_URL + '/getDoctors')
  // }

  // saveOrUpdateDoctor(doctor) {
  //   return axios.post(Constants.API_BASE_URL, doctor)
  // }




 
}

export default new UserService()
