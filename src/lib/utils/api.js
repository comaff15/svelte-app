import { error } from "@sveltejs/kit";
import { API_URL } from "$env/static/private"

const URL = API_URL

const send = async({method, path, data, token}) => {
    const opts = {method, headers: {}};

    if (data) {
        opts.headers['Content-type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    if (token) {
        opts.headers['Authorization'] = `jwt ${token}`;
    }

    const res = await fetch(`${URL}/${path}`, opts);

    if (res.ok || res.status === 422) {
        const text = await res.text()
        return text ? JSON.parse(text) : {};
    }

    error(res.status);
}

export const get = (path, token) => {
    return send({ method: 'GET', path, token});
}

export const del = (path, token) => {
    return send({ method: 'DELETE', path, token});
}

export const post = (path, data, token) => {
    return send({method: 'POST', path, data, token});
}

export const put = (path, data, token) => {
    return send({method: 'PUT', path, data, token});
}