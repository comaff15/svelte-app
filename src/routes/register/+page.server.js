import {fail, redirect} from '@sveltejs/kit';
import * as api from '$lib/utils/api';

/** @type {import(./$types).PageServerLoad} */
export const load = async({parent}) => {
    const {user} = await parent();
    if(user) redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request}) => {
		const data = await request.formData();

		const user = {
			login: data.get('login'),
			password: data.get('password')
		};

		const body = await api.post('auth/sign-up', JSON.stringify(user));

		if (body.errors) {
			return fail(401, body);
		}

		redirect(307, '/');
	}
};