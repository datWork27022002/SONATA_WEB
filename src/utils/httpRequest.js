import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_BE_URL,
    // withCredentials: true,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest
        .get(path, options)
        .then((res) => res.data)
        .catch((err) => {
            console.log('err', err?.response?.data);
            return null;
        });
    return response;
};

export const post = async (path, data = {}, options = {}) => {
    const response = await httpRequest
        .post(path, data, options)
        .then((res) => res.data)
        .catch((err) => {
            console.log('err', err?.response?.data);
            return null;
        });
    return response;
};

export default httpRequest;
