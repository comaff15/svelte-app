import * as api from '$lib/utils/api.js';

export const load = async({cookies}) => {
    const profile = await api.get(`account/me`, cookies.get('jwt'));

    return {
        profile
    } 
}