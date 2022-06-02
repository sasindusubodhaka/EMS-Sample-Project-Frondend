import AdminDashboardService from "./AdminDashboardService";
// import history from '../../../../../../../@history'

export const ON_GET_DATA_CARD_DETAILS = '[ON_GET_DATA_CARD_DETAILS] ON_GET_DATA_CARD_DETAILS';
export const ON_GET_REGISTERED_USERS = '[ON_GET_REGISTERED_USERS] ON_GET_REGISTERED_USERS';
export const ON_GET_DEPTWISE_USER_COUNT="[ON_GET_DEPTWISE_USER_COUNT] ON_GET_DEPTWISE_USER_COUNT";

export function getDataCardDetails() {
    const request = AdminDashboardService.getDataCardDetails();
    return (dispatch, getState) => {
        request.then((response) => {
            dispatch({
                type: ON_GET_DATA_CARD_DETAILS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in card details")
        })
    };
}
export function getRegisteredUsers() {
    const request = AdminDashboardService.getRegisteredUsers();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log(response.data)
            dispatch({
                type: ON_GET_REGISTERED_USERS,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in get register user")
        })
    };
}
export function getDeptWiseUserCount() {
    const request = AdminDashboardService.getDeptWiseUserCount();
    return (dispatch, getState) => {
        request.then((response) => {
            console.log("result:",response.data)
            dispatch({
                type: ON_GET_DEPTWISE_USER_COUNT,
                payload: response.data
            })


        }).catch((error) => {
            console.log("error in get deptwise user count")
        })
    };
}






