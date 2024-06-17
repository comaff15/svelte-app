import axios from 'axios';
import { API_URL } from "$env/static/private"

const sendRequest = async (method, path, jsonData = null, token = null) => {
    const headers = {
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        method,
        url: `${API_URL}/${path}`,
        headers,
        data: jsonData
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || error.message);
    }
}

export const post = async (path, jsonData, token) => {
    return sendRequest('POST', path, jsonData, token);
}

export const put = async (path, jsonData, token) => {
    return sendRequest('PUT', path, jsonData, token);
}

export const get = async (path, token) => {
    return sendRequest('GET', path, null ,token);
}

export const path = async (path, jsonData, token) => {
    return sendRequest('PATCH', path, jsonData, token)
}

export const del = async (path, token) => {
    return sendRequest('DELETE', path, null, token);
}
