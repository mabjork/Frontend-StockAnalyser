import {currencyConstants} from "../constants/currencyConstants";




export default function currencies(state={},action) {
    switch (action.type){
        case currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_REQUEST:
            return{
                ...state,
                fetching:true,
            };
        case currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_FAILURE:
            return{
                ...state,
                error:action.error,
                fetched:false
            };
        case currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_SUCCESS:
            return {
                ...state,
                fetching:false,
                fetched:true,
                currencies:action.data
            };
        case currencyConstants.SET_SELECTED_CURRENCY:
            return {
                ...state,
                selectedCurrency:action.payload
            };
        case currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_REQUEST:
            return {
                ...state,
                fetching:true,
            };
        case currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_FAILURE:
            return {
                ...state,
                fetching:false,
                error:action.error
            };
        case currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_SUCCESS:
            return {
                ...state,
                fetching:false,
                currencyData:action.data
            };
        default:
            return state

    }
}