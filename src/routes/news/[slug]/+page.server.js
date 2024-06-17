import * as api  from `$lib/utils/api.js`;

import { error } from "@sveltejs/kit";
import {marked} from 'marked'
import sanitizeHtml from "sanitize-html";

/** @type {import('./types').PageServerLoad} */
export const laod = async({ params}) => {
    const news = await api.get(`news/${params.slug}`);
    return {
        news
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    createComment: async({locals, params, request}) => {
        if(!locals.user) error(401);

        const data = await request.formData();

        await api.post(
            `post/${params.slug}/comments`,
            {
                comment: {
                    body: data.get('comment')
                },
            },
            cookies.get('jwt')
        );
    },

    deleteComment: async ({locals, params, url}) => {
        if (locals.user) error(401);

        const id = url.searchParams.get('id');
        const result = await api.del(`news/${params.slug}/comments/${id}`,  cookies.get('jwt'));

        if (result.error) error(result.status, result.error);
    }
};