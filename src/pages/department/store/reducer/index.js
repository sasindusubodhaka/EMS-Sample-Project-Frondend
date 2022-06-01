import {combineReducers} from 'redux';
import manageDeptReducer from "./manageDeptReducer";

const reducer = combineReducers(
  {manageDepts: manageDeptReducer}
);

export default reducer;