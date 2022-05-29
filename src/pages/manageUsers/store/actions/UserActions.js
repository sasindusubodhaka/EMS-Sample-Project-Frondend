import history from '../../../../@history'
import UserService from './UserService'
import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// toast.configure()

export const ON_ADD_NEW_USER = '[ON_ADD_NEW_USER] ON_ADD_NEW_USER'



export function saveUser(user) {
  const request = UserService.saveUser(user)

  return (dispatch, getState) => {
    return request
      .then((response) => {
        toast.success('Successfully Registered', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        })
        // history.push('viewusers')
        dispatch({
          type: ON_ADD_NEW_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        // toast.error('Register failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log("error in user action")
      })
  }
}












 
