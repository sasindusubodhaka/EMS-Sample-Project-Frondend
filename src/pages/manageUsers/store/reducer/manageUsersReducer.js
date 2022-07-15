import {
  ON_GET_USER_LIST,
  ON_GET_DEPARTMENT_LIST
} from '../actions/UserActions'

const initialState = {
  userList: [],
  deptList: []
}

const manageUsersReducer = function (state = initialState, action) {
  switch (action.type) {
    case ON_GET_USER_LIST: {
      return {
        ...state,
        userList: [...action.payload],
      }
    }
    case ON_GET_DEPARTMENT_LIST: {   
      console.log("dept list in userReducer : ",action.payload); 
      return {
        ...state,
        deptList: [...action.payload],
      }
    }
    default: {
      return state
    }
  }
}

export default manageUsersReducer
