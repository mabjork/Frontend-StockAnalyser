import axios from 'axios';
import {store} from "../store"
import {equityActions} from "../actions/equityActions"
const ALPHA_VANTAGE_ROOT = 'https://www.alphavantage.co/query?';
const ALPHA_VANTAGE_END = "&apikey=UM5EE9UP44J2R9SE";
const test = "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo";
const baseUrl = "http://localhost:8080/equities";


axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request
});

axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response
});

function getData(symbol,dataFunction,interval){

    const url = ALPHA_VANTAGE_ROOT + "function=" + dataFunction + "&symbol="  + symbol + "&interval=" + interval + ALPHA_VANTAGE_END;
    return axios.get(url).then(res => {
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }
        return {data:transformData(res.data)}
    })
}
function getEquitiesPage(page,pagelenght){
    console.log(localStorage.getItem("token"));

    const url = baseUrl + "/all"+ "?" + "page="+page+"&"+"pagelenght="+pagelenght;
    return axios.get(url,{headers:{'Authorization': 'Bearer '+localStorage.getItem("token")}}).then(res =>{
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }
        return res.data.content;
    })
}
function subscribe(symbol,username) {
    const url = baseUrl + "/subscribe" + "/query?" + "symbol=" + symbol + "&username=" + username;
    return axios.post(url).then(res => {
        if(res.status !== 200){
            Promise.reject(res.statusText);
        }
        return res;
    })
}
function unsubscribe(symbol,username){
    const url = baseUrl+ "/subscribe" + "/query?" + "symbol=" + symbol + "&username=" + username;
    return axios.post(url).then(res => {
        if(res.status !== 200){
            Promise.reject(res.statusText);
        }
        return res;
    })
}
function getSectorData() {
    const url = ALPHA_VANTAGE_ROOT + "function=SECTOR"+ ALPHA_VANTAGE_END;
    return axios.get(url).then(res => {
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }

        return res.data;
    })
}

function searchEquities(query) {
    const url = baseUrl + "/search?query=" + query;
    return axios.get(url,{headers:{'Authorization': 'Bearer '+localStorage.getItem("token")}})
        .then(res => {
            if(res.status !== 200){
                Promise.reject(res.statusText)
            }
            return res.data
        })
}

function transformData(body){

    let keys = Object.keys(body);
    let data = body[keys[1]];
    const dataList = [];
    for(let item in data){
        dataList.push({time:item,value:parseFloat(body[keys[1]][item]["4. close"])})
    }
    return dataList.reverse();
}


export const equityService = {
    getData,
    subscribe,
    unsubscribe,
    getEquitiesPage,
    getSectorData,
    searchEquities
};