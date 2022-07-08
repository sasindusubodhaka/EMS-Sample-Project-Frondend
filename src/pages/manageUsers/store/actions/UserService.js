import axios from 'axios'
import Constants from '../../../../utils/Constants'

class UserService {
  saveUser(user) {
    return axios.post(Constants.API_BASE_URL + '/addUser', user)
  }
  getUserList() {
    return axios.get(Constants.API_BASE_URL + '/getUserList')
  }
  updateUser(updatedUser) {
    return axios.post(Constants.API_BASE_URL + '/updateUser', updatedUser)
  }

  deleteUser(userId) {
    return axios.delete(Constants.API_BASE_URL + '/deleteUser/' + userId)
  }

  getdeptList() {
    console.log("prr")
    return axios.get(Constants.API_BASE_URL + '/getdeptList/')
  }






}

export default new UserService()
