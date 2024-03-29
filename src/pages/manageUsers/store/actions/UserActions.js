import history from '../../../../@history'
import UserService from './UserService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const ON_ADD_NEW_USER = '[ON_ADD_NEW_USER] ON_ADD_NEW_USER'
export const ON_GET_USER_LIST = '[ON_GET_USER_LIST] ON_GET_USER_LIST'
export const ON_UPDATE_USER = '[ON_UPDATE_USER] ON_UPDATE_USER'
export const ON_DELETE_USER = '[ON_DELETE_USER] ON_DELETE_USER'
export const ON_GET_DEPT_LIST = '[ON_GET_DEPT_LIST] ON_GET_DEPT_LIST'


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

export function updateUser(updatedUser) {
  const request = UserService.updateUser(updatedUser)

  return (dispatch, getState) => {
    return request
      .then((response) => {
        if (response.data === 1) {
          toast.success('Successfully Updated', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          })
          history.push('viewusers')
        }
        dispatch({
          type: ON_UPDATE_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        toast.error('update failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log(error)
      })
  }
}

export function deleteUser(userId) {
  const request = UserService.deleteUser(userId)
  return (dispatch, getState) => {
    return request
      .then((response) => {
        if (response.data === "Successfully deleted user") {
          toast.success('Successfully Deleted', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          })
          history.push('viewusers')
        }
        dispatch({
          type: ON_DELETE_USER,
          payload: response.data,
        })
      })
      .catch((error) => {
        toast.error('delete failed , Please try agin', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
        console.log(error)
      })
  }
}

export function getdepartmentList() {
  const request = UserService.getdepartmentList()
  return (dispatch, getState) => {    
    request.then((response) => { 
      console.log("responce data in user action:",response.data)
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












