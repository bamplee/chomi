import axios from 'axios';

const get = (path, params) => {
    return axios.get(path, {params: params});
};

export const api = {
    search: (query) => {
        return get('http://101.101.161.132/api/v1/maps/search', {query: query});
    },
    route: (startX, startY, endX, endY) => {
        return get('http://101.101.161.132/api/v1/maps/route', {
            startX: startX,
            startY: startY,
            endX: endX,
            endY: endY
        })
    },
    graph: (mapObject) => {
        return get('http://101.101.161.132/api/v1/maps/graph', {
            mapObject: mapObject
        })
    }
};