import axios from 'axios';
const ALPHA_VANTAGE_ROOT = 'https://www.alphavantage.co/query?';
const ALPHA_VANTAGE_END = "&apikey=UM5EE9UP44J2R9SE";
const baseUrl = "http://localhost:8080/currencies";

function getDigitalCurrencyPage(page,pagelenght){
    const url = baseUrl + "/digital"+ "?" + "page="+page+"&"+"pagelenght="+pagelenght;
    return axios.get(url,{headers:{'Authorization': 'Bearer '+localStorage.getItem("token")}}).then(res =>{
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }
        return res.data.content;
    })
}
function getPhysicalCurrencyPage(page,pagelenght) {
    const url = baseUrl + "/physical"+ "?" + "page="+page+"&"+"pagelenght="+pagelenght;
    return axios.get(url,{headers:{'Authorization': 'Bearer '+localStorage.getItem("token")}}).then(res =>{
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }
        return res.data.content;
    })
}

function getData(symbol,dataFunction,market){

    const url = ALPHA_VANTAGE_ROOT + "function=" + "DIGITAL_CURRENCY_INTRADAY" + "&symbol="  + symbol + "&market=" + market + ALPHA_VANTAGE_END;
    return axios.get(url).then(res => {
        if(res.status !== 200){
            Promise.reject(res.statusText)
        }
        return {data:transformData(res.data)}
    })
}
function transformData(body){

    let keys = Object.keys(body);
    let data = body[keys[1]];
    const dataList = [];
    for(let item in data){
        dataList.push({time:item,value:parseFloat(body[keys[1]][item]["1b. price (USD)"])})
    }
    return dataList.reverse();
}

export const currencyService = {
    getDigitalCurrencyPage,
    getPhysicalCurrencyPage,
    getData
};