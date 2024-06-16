import {error, fail, redirect} from '@sveltejs/kit';
import * as api  from '$lib/utils/api.js'

export const load = ({locals}) => {
    if (!locals.user) redirect(302, '/login')
}

export const actions = {
    logout: async({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.user = null;
    },

    save: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            password: data.get('password')
        };

        const body = await api.put('user', {user}, locals.user.token);
        if(body.errors) return fail(400, body.errors);

        const value = btoa(JSON.stringify(body.user));
        cookies.set('jwt', value, {path: '/'});

        locals.user = body.user;
    }
};