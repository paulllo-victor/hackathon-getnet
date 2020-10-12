import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://getcred.herokuapp.com/',
    
});

export default Api;