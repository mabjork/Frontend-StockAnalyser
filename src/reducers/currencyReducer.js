import {currencyConstants} from "../constants/currencyConstants";


const currencyData = [
    {
        symbol:"BTC",
        name:"Bitcoin",
        type:"Crypto currency"
    },
    {
        symbol:"USD",
        name:"US Dollar",
        type:"Regular currency"
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
export default function currencies(state={currencies:currencyData,data:data},action) {
    switch (action.type){
        case currencyConstants.FETCH_ALL_CURRENCIES_REQUEST:
            return{
                ...state,
                fetching:true,
            };
        case currencyConstants.FETCH_ALL_CURRENCIES_FAILURE:
            return{
                ...state,
                error:action.error,
                fetched:false
            };
        case currencyConstants.FETCH_ALL_CURRENCIES_SUCCESS:
            return {
                ...state,
                fetching:false,
                fetched:true
            };
        case currencyConstants.SET_SELECTED_CURRENCY:
            return {
                ...state,
                selected:action.payload
            };
        default:
            return state

    }
}