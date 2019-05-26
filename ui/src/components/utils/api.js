import axios from 'axios';

const axiosGet = (path, params, callback) => {
    axios.get(path, {params: params}).then(response => {
        if (typeof callback === 'function') {
            callback(response);
        }
    }).catch(e => console.log(e));
};

/*
const axiosPost = (path, data, callback) => {
    axios.post(path, data).then(response => {
        if (typeof callback === 'function') {
            callback(response);
        }
    }).catch(e => console.log(e));
};
*/

export const API_MODULE = {
    search: (query, callback) => {
        axiosGet('http://localhost:8080/api/v1/maps/search', {query: query}, callback)
    },
    route: (startX, startY, endX, endY, callback) => {
        axiosGet('http://localhost:8080/api/v1/maps/route', {startX: startX, startY: startY, endX: endX, endY: endY}, callback)
    }
};