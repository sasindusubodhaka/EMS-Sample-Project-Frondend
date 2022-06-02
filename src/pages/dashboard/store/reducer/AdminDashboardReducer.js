import {
    ON_GET_DATA_CARD_DETAILS,
    ON_GET_REGISTERED_USERS,
    ON_GET_DEPTWISE_USER_COUNT

} from "../action/AdminDashboardAction";
import * as _ from 'lodash'
const initialState = {

    dataCardDetails: [],
    registeredUsers:[],
    deptWiseUserCount:[]


};
const AdminDashboardReducer = function (state = initialState, action) {    

    switch (action.type) {
        case ON_GET_DATA_CARD_DETAILS: {
            return {
                ...state,
                dataCardDetails: [...action.payload]
            }

        }
        case ON_GET_REGISTERED_USERS: {            
            return {
                ...state,
                registeredUsers: [...action.payload]
            }

        }
        case ON_GET_DEPTWISE_USER_COUNT: {            
            return {
                ...state,
                deptWiseUserCount: [...action.payload]
            }

        }

        default: {

            return state;
        }
    }


};

export default AdminDashboardReducer;
