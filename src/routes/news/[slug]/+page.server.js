// import * as api  from `$lib/utils/api.js`;

// import { error } from "@sveltejs/kit";
// import {marked} from 'marked'
// import sanitizeHtml from "sanitize-html";

// /** @type {import('./types').PageServerLoad} */
// export const laod = async({locals, params}) => {
//     const [{news}, {comments}] = await Promise.all([
//         api.get(`news/${params.slug}`, locals.user?.token),
//         api.get(`news/${params.slug}/comments`, locals.user?.token)
//     ]);

//     const dirty = marked(news.body);
//     news.body = sanitizeHtml(dirty);

//     return {news, comments};
// }

// /** @type {import('./$types').Actions} */
// export const actions = {
//     createComment: async({locals, params, request}) => {
//         if(!locals.user) error(401);

//         const data = await request.formData();

//         await api.post(
//             `news/${params.slug}/comments`,
//             {
//                 comment: {
//                     body: data.get('comment')
//                 },
//             },
//             locals.user.token
//         );
//     },

//     deleteComment: async ({locals, params, url}) => {
//         if (locals.user) error(401);

//         const id = url.searchParams.get('id');
//         const result = await api.del(`news/${params.slug}/comments/${id}`, locals.user?.token);

//         if (result.error) error(result.status, result.error);
//     }
// };