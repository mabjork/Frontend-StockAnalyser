import {equityConstants} from "../constants/equityConstants";


export default function equities(state={},action) {
    switch (action.type){
        case equityConstants.FETCH_ALL_REQUEST:
            return {
                ...state,
                fetchingEquities:true
            };
        case equityConstants.FETCH_ALL_SUCCESS:
            return {
                ...state,
                fetchingEquities:false,
                equities:action.data
            };
        case equityConstants.FETCH_ALL_FAILURE:
            return {
                ...state,
                fetchingEquities:false,
                error:action.error
            };

        case equityConstants.SET_SELECTED_EQUITY:
            return{
                ...state,
                selectedEquity:action.payload
            };
        case equityConstants.EQUITY_DATA_REQUEST:
            return{
                ...state,
                fetchingData:true
            };
        case equityConstants.EQUITY_DATA_FETCH_FAILURE:
            return{
                ...state,
                fetchingData:false,
                error:action.error
            };
        case equityConstants.EQUITY_DATA_FETCH_SUCCESS:
            return{
                ...state,
                fetchingData:false,
                equityData:action.data.data
            };
        case equityConstants.EQUITY_DATA_UNLOADED:
            return{
                ...state,
                equityData:null
            };
        case equityConstants.FETCH_SECTOR_DATA_REQUEST:
            return {
                ...state
            };
        case equityConstants.FETCH_SECTOR_DATA_FAILURE:
            return {
                ...state,
                error:action.error
            };
        case equityConstants.FETCH_SECTOR_DATA_SUCCESS:
            return {
                ...state,
                sectorData:action.data
            };
        default:
            return state
    }
}