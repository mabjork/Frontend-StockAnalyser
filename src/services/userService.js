import {authHeader} from "../helpers/authHeader";
import axios from 'axios';
import {store} from "../store"

const loginUrl = "http://localhost:8080/users/login";
const logoutUrl = "http://localhost:8080/users/logout";
const registerUrl = "http://localhost:8080/users/register";
export const userService = {
    login,
    logout,
    register,
};




function login(username,password) {
    return axios.post(loginUrl,{username:username,password:password}).then(res => {
        localStorage.setItem("username",username);
        if (res.status !== 200){
            console.log("rejected");
            return Promise.reject(res.statusText);
        }
        return res.data;
    },error => {
        return Promise.reject(error);
    }).then(
        data => {
        localStorage.setItem("token",String(data));
        return {token:String(data)};
    },error=>{
        return Promise.reject(error)
    });

}
function logout(username){
    return axios.post(logoutUrl,{username:username}).then(res => {
        return res.ok;
    })
}
function register(user) {
    return axios.post(registerUrl,JSON.stringify(user)).then(handleResponse);


}
function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}