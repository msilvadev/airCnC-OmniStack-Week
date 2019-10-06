import axios from 'axios';

const api = axios.create({
    baseURL: 'https://aircnc-backend-node.herokuapp.com',
});

export default api;