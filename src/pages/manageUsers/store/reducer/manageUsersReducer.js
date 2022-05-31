import {
  ON_GET_USER_LIST
} from '../actions/UserActions'

const initialState = {
  userList: []
}

const manageUsersReducer = function (state = initialState, action) {
  switch (action.type) {
    case ON_GET_USER_LIST: {  
      return {
        ...state,
        userList: [...action.payload],
      }
    }
    default: {
      return state
    }
  }
}

export default manageUsersReducer
