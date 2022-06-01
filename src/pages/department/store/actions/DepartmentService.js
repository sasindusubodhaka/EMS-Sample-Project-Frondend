import axios from 'axios'
import Constants from '../../../../utils/Constants'

class DepartmentService{
  saveDepartment(dept) {
    return axios.post(Constants.API_BASE_URL + '/addDepartment', dept)
  }
  getdepartmentList() { 
    return axios.get(Constants.API_BASE_URL + '/getdeptList')
  }
  // updateUser(updatedUser){
  //   return axios.post(Constants.API_BASE_URL + '/updateUser',updatedUser)
  // }

  // getDoctors() {
  //   return axios.get(Constants.API_BASE_URL + '/getDoctors')
  // }

  // saveOrUpdateDoctor(doctor) {
  //   return axios.post(Constants.API_BASE_URL, doctor)
  // }





}

export default new DepartmentService()
