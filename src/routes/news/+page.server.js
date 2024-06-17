import * as api from '$lib/utils/api';

/** @type {import ('./$types).PageServerLoad} */

export const load = async({url}) => {
    const page = +(url.searchParams.get('page') ?? '1');

	let page_size = 1
	let limit = (page - 1) * 20

	const articles = await api.get(`news/list?age=${page_size}&size=${limit}&sort=createdAt,desc`)
    
	return {
		articles
	};
}