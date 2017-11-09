import { equityConstants } from '../constants/equityConstants';
import { userService } from '../services/userService';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';
import {equityService} from "../services/equityService";


export const equityActions = {
    setSelected,
    fetchEquityData,
    fetchEquitiesPage,
    subscribe,
    unsubscribe,
    unloadData
};

function setSelected(equity){
    return {type:equityConstants.SET_SELECTED_EQUITY,payload:equity}
}


function fetchEquityData(symbol,dataFunction,interval){
    return dispatch => {
        dispatch(request(symbol));

        equityService.getData(symbol,dataFunction,interval)
            .then(

                data => {
                    dispatch(success(data))
                },error => {
                    dispatch(failure(error))
                }
        )
    };
    function request(symbol) { return { type: equityConstants.EQUITY_DATA_REQUEST, symbol } }
    function success(data) { return { type: equityConstants.EQUITY_DATA_FETCH_SUCCESS ,data} }
    function failure(error) { return { type: equityConstants.EQUITY_DATA_FETCH_FAILURE, error } }
}
function fetchEquitiesPage(page,pagelength) {
    return dispatch => {
        dispatch(request(page,pagelength));
        equityService.getEquitiesPage(page,pagelength)
            .then(
                data => {
                    dispatch(success(data))
                },error => {
                    dispatch(failure(error))
                }
            )
    };
    function request(page,pagelenght) { return { type: equityConstants.FETCH_ALL_REQUEST, page,pagelenght } }
    function success(data) { return { type: equityConstants.FETCH_ALL_SUCCESS ,data} }
    function failure(error) { return { type: equityConstants.FETCH_ALL_FAILURE, error } }
}
function subscribe(symbol,username){
    return dispatch => {
        dispatch(request());
        equityService.subscribe(symbol,username).
            then(
                error => {
                    dispatch(failure(error))
                },
                res => {
                    dispatch(success())
                }
        )
    };
    function request() { return { type: equityConstants.EQUITY_SUBSCRIBE_REQUEST} }
    function success() { return { type: equityConstants.EQUITY_SUBSCRIBE_SUCCESS} }
    function failure(error) { return { type: equityConstants.EQUITY_SUBSCRIBE_FAILURE,error} }
}
function unsubscribe(symbol,username) {
    return dispatch => {
        dispatch(request());
        equityService.unsubscribe(symbol,username).
            then(
                error => {
                    dispatch(failure(error))
                },
                res => {
                    dispatch(success())
                }
        )
    };
    function request() { return { type: equityConstants.EQUITY_UNSUBSCRIBE_REQUEST} }
    function success() { return { type: equityConstants.EQUITY_UNSUBSCRIBE_SUCCESS} }
    function failure(error) { return { type: equityConstants.EQUITY_UNSUBSCRIBE_FAILURE,error} }
}
function unloadData() {
    return dispatch => {
        dispatch({type:equityConstants.EQUITY_DATA_UNLOADED})
    }
}