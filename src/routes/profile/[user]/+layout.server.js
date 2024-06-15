import * as api from '$lib/utils/api.js';

export const load = async({locals, params}) => {
    const { profile } = await api.get(`profiles/${params.user}`, locals.user?.token);

    return {
        profile
    }
}