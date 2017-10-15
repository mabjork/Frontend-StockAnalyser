import {equityConstants} from "../constants/equityConstants";


const initData = [
    {
        symbol:"t1",
        name:"test1",
        sector:"sector1"
    },
    {
        symbol:"t2",
        name:"test2",
        sector:"sector2"
    },
    {
        symbol:"t2",
        name:"test2",
        sector:"sector2"
    }
];
const datatypes = [
    {
        name:"SideItem1",
        apiKey:"KEY1"
    },
    {
        name:"SideItem2",
        apiKey:"KEY1"
    },
    {
        name:"SideItem3",
        apiKey:"KEY1"
    },
    {
        name:"SideItem4",
        apiKey:"KEY1"
    },
    {
        name:"SideItem5",
        apiKey:"KEY1"
    },
    {
        name:"SideItem6",
        apiKey:"KEY1"
    },
    {
        name:"SideItem7",
        apiKey:"KEY1"
    },
    {
        name:"SideItem8",
        apiKey:"KEY1"
    },
    {
        name:"SideItem1",
        apiKey:"KEY1"
    },
    {
        name:"SideItem2",
        apiKey:"KEY1"
    },
    {
        name:"SideItem3",
        apiKey:"KEY1"
    },
    {
        name:"SideItem4",
        apiKey:"KEY1"
    },
    {
        name:"SideItem5",
        apiKey:"KEY1"
    },
    {
        name:"SideItem6",
        apiKey:"KEY1"
    },
    {
        name:"SideItem7",
        apiKey:"KEY1"
    },
    {
        name:"SideItem8",
        apiKey:"KEY1"
    },
    {
        name:"SideItem1",
        apiKey:"KEY1"
    },
    {
        name:"SideItem2",
        apiKey:"KEY1"
    },
    {
        name:"SideItem3",
        apiKey:"KEY1"
    },
    {
        name:"SideItem4",
        apiKey:"KEY1"
    },
    {
        name:"SideItem5",
        apiKey:"KEY1"
    },
    {
        name:"SideItem6",
        apiKey:"KEY1"
    },
    {
        name:"SideItem7",
        apiKey:"KEY1"
    },
    {
        name:"SideItem8",
        apiKey:"KEY1"
    },
];
export default function equities(state={equities:initData,fetching:false,datatypes:datatypes},action) {
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
                selectedData:action.payload
            };
        case equityConstants.EQUITY_DATA_UNLOADED:
            return {
                ...state,
                selectedEquity:null,
                selectedData:null
            };
        case equityConstants.EQUITY_API_TYPES:
            return{
                ...state,
                datatypes:action.payload
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