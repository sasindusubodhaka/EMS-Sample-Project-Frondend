import history from '../../../../@history'
import deptService from './DepartmentService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_ADD_NEW_DEPARTMENT = '[ON_ADD_NEW_DEPARTMENT] ON_ADD_NEW_DEPARTMENT'
export const ON_GET_DEPT_LIST = '[ON_GET_DEPT_LIST] ON_GET_DEPT_LIST'

export function saveDepartment(dept) {
  const request = deptService.saveDepartment(dept)

  return (dispatch, getState) => {
    return request
      .then((response) => {
        toast.success('Successfully Addes', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
        history.push('viewdepartments')
        dispatch({
          type: ON_ADD_NEW_DEPARTMENT,
          payload: response.data,
        })
      })
      .catch((error) => {
        toast.error('department add failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log(error)
      })
  }
}

export function getdepartmentList() {
  const request = deptService.getdepartmentList()
  console.log("request in action :",request)
  return (dispatch, getState) => {
    request.then((response) => { 
      dispatch({
        type: ON_GET_DEPT_LIST,
        payload: response.data,
      })
    })
      .catch((error) => {     
        console.log('get dept list error', error)
      })
  }
}

// export function updateUser(updatedUser) {
//   const request = UserService.updateUser(updatedUser)

//   return (dispatch, getState) => {
//     return request
//       .then((response) => {
//         if(response.data==1){
//           toast.success('Successfully Updated', {
//             position: toast.POSITION.TOP_CENTER,
//             autoClose: 2000,
//           })   
//           history.push('viewusers')
//         }
//         dispatch({
//           type: ON_UPDATE_USER,
//           payload: response.data,
//         })
//       })
//       .catch((error) => {
//         toast.error('update failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
//         console.log(error)
//       })
//   }
// }















