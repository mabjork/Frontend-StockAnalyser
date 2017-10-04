
import {alertActions} from "./alertActions";
import {userConstants} from "../constants/userConstants";
import {alertActions} from "./alertActions";
import {history} from "../helpers"


function login(username,password) {
    return dispatch => {
        dispatch(request({username}));

        userService.login(username,password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push("/")
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                }
            );
    };
    function request(user) {
        return {type:userConstants.LOGIN_REQUEST,user}
    }
    function success(user) {
        return {
            type:userConstants.LOGIN_SUCCESS,user
        }
    }
    function failure(error) {
        return {
            type:userConstants.LOGIN_FAILURE,error
        }
    }
}
function logout(){
    userService.logout();
    return {type:userConstants.LOGOUT}
}
function register(user){
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
    }
}
