import {currencyConstants} from "../constants/currencyConstants"
import {currencyService} from "../services/currencyService";

function setSelected(currency) {
    return {
        type:currencyConstants.SET_SELECTED_CURRENCY ,
        payload:currency
    };
}

function getDigitalCurrencyData(symbol,datafunction,market) {
    return dispatch => {
        dispatch(request(symbol));
        currencyService.getData(symbol,datafunction,market)
            .then(
                data => {
                    dispatch(success(data.data))
                },error => {
                    dispatch(failure(error))
                }
            )
    };
    function request(symbol) { return { type: currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_REQUEST,symbol } }
    function success(data) { return { type:currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_SUCCESS ,data} }
    function failure(error) { return { type: currencyConstants.FETCH_DIGITAL_CURRENCY_DATA_FAILURE, error } }
}

function fetchDigitalCurrencyPage(page,pagelength) {
    return dispatch => {
        dispatch(request(page,pagelength));
        currencyService.getDigitalCurrencyPage(page,pagelength)
            .then(
                data => {
                    dispatch(success(data))
                },error => {
                    dispatch(failure(error))
                }
            )
    };
    function request(page,pagelenght) { return { type: currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_REQUEST, page,pagelenght } }
    function success(data) { return { type:currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_SUCCESS ,data} }
    function failure(error) { return { type: currencyConstants.FETCH_ALL_DIGITAL_CURRENCIES_FAILURE, error } }
}
function fetchPhysicalCurrencyPage(page,pagelength) {
    return dispatch => {
        dispatch(request(page,pagelength));
        currencyService.getPhysicalCurrencyPage(page,pagelength)
            .then(
                data => {
                    dispatch(success(data))
                },error => {
                    dispatch(failure(error))
                }
            )
    };
    function request(page,pagelenght) { return { type: currencyConstants.FETCH_ALL_PHYSICAL_CURRENCIES_REQUEST, page,pagelenght } }
    function success(data) { return { type:currencyConstants.FETCH_ALL_PHYSICAL_CURRENCIES_SUCCESS ,data} }
    function failure(error) { return { type: currencyConstants.FETCH_ALL_PHYSICAL_CURRENCIES_FAILURE, error } }
}


export const currencyActions = {
    setSelected,
    fetchDigitalCurrencyPage,
    fetchPhysicalCurrencyPage,
    getDigitalCurrencyData
};