import {currencyConstants} from "../constants/currencyConstants"

function setSelected(currency) {
    return {
        type:currencyConstants.SET_SELECTED_CURRENCY ,
        payload:currency
    };
}

export const currencyActions = {
    setSelected,

};