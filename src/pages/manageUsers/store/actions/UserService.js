import axios from 'axios'
import Constants from '../../../../utils/Constants'

class UserService {
  getdepartmentList() {
    return axios.get(Constants.API_BASE_URL + '/getDeptList')
  }
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

 




}

export default new UserService()
