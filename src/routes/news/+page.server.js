import * as api from '$lib/utils/api';
import {page_size} from '$lib/utils/constants'

/** {import('./$types).PageServerLoad} */

export const load = async({url}) => {
    const page = +(url.searchParams.get('page') ?? '1');

	const q = new URLSearchParams();

	q.set('page', page_size);
	q.set('limit', (page - 1) * page_size);

	const articles = await api.get(`news/list?${q}&sort=createdAt,desc`)
    
	return {
		articles
	};
}