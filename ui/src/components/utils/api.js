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
    image: (x, y, callback) => {
        axiosGet('http://localhost:8080/api/v1/maps/image', {x: x, y: y}, callback)
    }
};