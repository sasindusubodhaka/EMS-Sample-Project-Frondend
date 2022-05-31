import history from '../../../../@history'
import UserService from './UserService'
import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// toast.configure()

export const ON_ADD_NEW_USER = '[ON_ADD_NEW_USER] ON_ADD_NEW_USER'
export const ON_GET_USER_LIST = '[ON_GET_USER_LIST] ON_GET_USER_LIST'



export function saveUser(user) {
  const request = UserService.saveUser(user)

  return (dispatch, getState) => {
    return request
      .then((response) => {
        toast.success('Successfully Registered', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
        history.push('viewusers')
        dispatch({
          type: ON_ADD_NEW_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        toast.error('Register failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log(error)
      })
  }
}

export function getUserList() {
  const request = UserService.getUserList()
  console.log("request in action :",request)
  return (dispatch, getState) => {
    request.then((response) => { 
      dispatch({
        type: ON_GET_USER_LIST,
        payload: response.data,
      })
    })
      .catch((error) => {
        // toast.error('Register failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log('get user list error', error)
      })
  }
}













