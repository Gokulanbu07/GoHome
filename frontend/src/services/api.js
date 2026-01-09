import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const propertyService = {
    getAll: () => api.get('/properties'),
    getById: (id) => api.get(`/properties/${id}`),
};

export { api };