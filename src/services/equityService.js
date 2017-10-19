import axios from 'axios';
import {store} from "../store"
import {equityActions} from "../actions/equityActions"
const ALPHA_VANTAGE_ROOT = 'https://www.alphavantage.co/query?';
const ALPHA_VANTAGE_END = "&apikey=UM5EE9UP44J2R9SE";
const test = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo";

function getData(symbol,dataFunction,interval){

    const url = ALPHA_VANTAGE_ROOT + "function=" + dataFunction + "&symbol="  + symbol + "&interval=" + interval + ALPHA_VANTAGE_END;
    axios.get(test).then(res => {
        store.dispatch(equityActions.setData(transformData(res.data)))
    })

}
function transformData(body){

    let keys = Object.keys(body);
    let data = body[keys[1]];
    const dataList = [];
    for(let item in data){
        dataList.push({time:item,value:parseInt(body[keys[1]][item]["4. close"])})
    }
    return dataList.reverse();
}

export const equityService = {
    getData,
};