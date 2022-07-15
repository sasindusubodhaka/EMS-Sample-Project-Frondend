import {
  ON_GET_DEPT_LIST
} from '../actions/DepartmentActions'

const initialState = {
  deptList: []
}

const manageDeptReducer = function (state = initialState, action) {
  switch (action.type) {
    case ON_GET_DEPT_LIST: {
      console.log("dept list in deptReducer : ",action.payload);
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

export default manageDeptReducer
