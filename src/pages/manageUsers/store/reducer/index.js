import {combineReducers} from 'redux';
import manageUsersReducer from "./manageUsersReducer";

const reducer = combineReducers(
  {manageUsers: manageUsersReducer}
);

export default reducer;