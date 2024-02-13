import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	// redirect user if not logged in or admin role id
	if (!locals.user || locals.user.role_id != 1) {
		throw redirect(302, '/login')
	}

	let users = [];

	const res = await fetch(`http://localhost:8585/api/v1/users`, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
	});

	users = await res.json()

	return {
	  users
	};
}