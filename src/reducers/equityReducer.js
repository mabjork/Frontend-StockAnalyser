import {equityConstants} from "../constants/equityConstants";


const initData = [
    {
        symbol:"STL",
        name:"test1",
        sector:"sector1"
    },
    {
        symbol:"t2",
        name:"test2",
        sector:"sector2"
    },
    {
        symbol:"t3",
        name:"test3",
        sector:"sector3"
    },
    {
        symbol:"t4",
        name:"test4",
        sector:"sector4"
    },
    {
        symbol:"t5",
        name:"test5",
        sector:"sector5"
    }
    ,
    {
        symbol:"t6",
        name:"test6",
        sector:"sector6"
    }
];

const data = [
    {
        name:"name1",
        value:10
    },
    {
        name:"name2",
        value:20
    },
    {
        name:"name3",
        value:30
    },
    {
        name:"nam4",
        value:30
    },
    {
        name:"name5",
        value:30
    },
    {
        name:"name6",
        value:30
    },
    {
        name:"name7",
        value:30
    },
    {
        name:"name8",
        value:30
    },
    {
        name:"name9",
        value:30
    },
    {
        name:"name10",
        value:30
    },
    {
        name:"name11",
        value:30
    },
    {
        name:"name12",
        value:30
    },


];
export default function equities(state={equities:initData,equityData:data},action) {
    switch (action.type){
        case equityConstants.FETCH_ALL_REQUEST:
            return {
                ...state,
                fetching:true
            };
        case equityConstants.FETCH_ALL_SUCCESS:
            return {
                ...state,
                fetching:false,
                equities:action.payload
            };
        case equityConstants.FETCH_ALL_FAILURE:
            return {
                ...state,
                fetching:false,
                error:action.error
            };
        case equityConstants.EQUITY_DATA_LOADED:
            return {
                ...state,
                equityData:action.payload
            };
        case equityConstants.EQUITY_DATA_UNLOADED:
            return {
                ...state,
                selectedEquity:null,
                equityData:null
            };
        case equityConstants.SET_SELECTED_EQUITY:
            return{
                ...state,
                selectedEquity:action.payload
            };
        default:
            return state
    }
}