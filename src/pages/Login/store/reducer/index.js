import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

const reducer = combineReducers(
    {loginData:LoginReducer}
);

export default reducer;