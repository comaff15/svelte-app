import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/utils/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.user) redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const user = {
				login: data.get('login'),
				password: data.get('password')
		}

		const body = await api.post('auth/sign-in', JSON.stringify(user));

		if (body.errors) {
			return fail(401, body);
		}

		const value = body.token;
		cookies.set('jwt', value, { path: '/' });

		redirect(307, '/');
	}
};