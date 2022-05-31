import axios from 'axios'
import Constants from '../../../../utils/Constants'

class UserService {
  saveUser(user) {
    return axios.post(Constants.API_BASE_URL + '/addUser', user)
  }
  getUserList() { 
    return axios.get(Constants.API_BASE_URL + '/getUserList')
  }
  updateUser(updatedUser){
    return axios.post(Constants.API_BASE_URL + '/updateUser',updatedUser)
  }

  // getDoctors() {
  //   return axios.get(Constants.API_BASE_URL + '/getDoctors')
  // }

  // saveOrUpdateDoctor(doctor) {
  //   return axios.post(Constants.API_BASE_URL, doctor)
  // }





}

export default new UserService()
