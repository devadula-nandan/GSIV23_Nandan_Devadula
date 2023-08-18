import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const bearerToken = process.env.REACT_APP_API_BEARER;
        if (bearerToken) {
            config.headers.Authorization = `Bearer ${bearerToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const apiRequest = async (method, endpoint, data = null) => {
    const config = {
        method,
        url: endpoint,
        data,
    };

    try {
        const response = await axiosInstance(config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default apiRequest;
