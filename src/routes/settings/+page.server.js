import {error, fail, redirect} from '@sveltejs/kit';
import * as api  from '$lib/utils/api'

export const load = ({locals}) => {
    if (!locals.user) redirect(302, '/login')
}

/** @type {import(./$types).Actions} */
export const actions = {
    logout: async({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.user = null;
    },

    updateStatus: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            status: data.get('status'),
        };

        const body = await api.patch('account/updateStatus', JSON.stringify(user), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);

        cookies.delete('jwt', {path:'/'})

        locals.user = null;
    },

    updatePassword: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            status: data.get('password'),
        };

        const body = await api.patch('account/updatePassword', JSON.stringify(user), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);

        cookies.delete('jwt', {path:'/'})

        locals.user = null;
    }
};