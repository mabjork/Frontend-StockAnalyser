import axios from 'axios';


const base_url="http://localhost:8080/metadata";

export const metadataService = {
    getMetadata
}
function getMetadata() {
    return axios.get(base_url)
        .then(res => {
            if(res.status !== 200){
                Promise.reject(res.statusText)
            }
            return res.data;
        })
}