import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

const reducer = combineReducers(
    {login:LoginReducer}
);

export default reducer;