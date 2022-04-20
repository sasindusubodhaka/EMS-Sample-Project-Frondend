import {ON_GET_USER_CREDENTIALS} from '../action/LoginAction';

const initialState ={
    userCredentials:{}
};

const LoginReducer = function(state = initialState, action){
    switch(action.type){
        case ON_GET_USER_CREDENTIALS:{
            return{
                ...state,
                userCredentials:{...action.payload}
            }
        }
    }
}

export default LoginReducer;