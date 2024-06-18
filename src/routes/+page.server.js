import * as api from '$lib/utils/api'

/** @type {import ('./$types).PageServerLoad} */
export const load = async() => {
	const articles = await api.get('news/list?page=0&size=4&sort=createdAt,desc')
    
	return {
		articles
	};
}