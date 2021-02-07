/* eslint-disable no-console */
import Vue from 'vue';
import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        get: {
            'Authorization': 'abc123',
        },
    },
});

/*

api.interceptors.request.use((config) => {
    console.log(config.method);
    return config;
});

api.interceptors.response.use((config) => {
    console.log(config);

    return config;
}, (err) => Promise.reject(err));

*/

Vue.use({
    install(Vue) {
        Vue.prototype.$http = api;
    },
});
