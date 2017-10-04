import {alertConstants} from "../constants"

export const alertActions = {
    success,
    error,
    clear
}

function success(message) {
    return {type:alertConstants.SUCSESS, message};
}

function error(message) {
    return {type: alertConstants.ERROR,message};
}
function clear() {
    return {type: alertConstants.CLEAR};
}