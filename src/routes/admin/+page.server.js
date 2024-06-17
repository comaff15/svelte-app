import {error, fail} from '@sveltejs/kit';
import * as api  from '$lib/utils/api'

/** @type {import(./$types).Actions} */
export const actions = {
    updateStatus: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            id: data.get('id'),
            status: data.get('status')
        };

        const body = await api.patch(`account/updateStatus/${user.id}`, JSON.stringify(user), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },

    updatePassword: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            id: data.get('id'),
            status: data.get('password'),
        };

        const body = await api.patch(`account/updatePassword/${user.id}`, JSON.stringify(user), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },

    updateOnline: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const user = {
            id: data.get('id'),
            isOnline: data.get('isOnline'),
        };

        const body = await api.patch(`account/updateOnline/${user.id}`, JSON.stringify(user), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },

    createPost: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();

        const post = {
            title: data.get('title'),
            body: data.get('body'),
            tags: []
        };
        
        const body = await api.post('admin/news/', JSON.stringify(post), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },

    updatePost: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();
        
        const post = {
            id: data.get('id'),
            title: data.get('title'),
            body: data.get('body'),
            tags: []
        };

        const body = await api.put('admin/news/', JSON.stringify(post), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },

    deletePost: async({cookies, locals, request}) => {
        if (!locals.user) error(401);

        const data = await request.formData();


        const post = {
            id: data.get('id')
        };

        const body = await api.del(`account/updatePassword/${post.id}`, JSON.stringify(post), cookies.get('jwt'));
        if(body.errors) return fail(400, body.errors);
    },
};