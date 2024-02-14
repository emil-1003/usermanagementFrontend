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

const deleteUser = async ({ request, locals, cookies }) => {
	const data = await request.formData()
	const userID = data.get('userID')
	
	// MAKE POST LOGIN REQUEST
	await fetch(`http://localhost:8585/api/v1/users/${userID}`, {
		method: 'DELETE',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		}
	});

	// If user delete it self
	if (locals.user.uid == userID) {
		// eat the cookie
		cookies.set('jwt', '', {
			path: '/',
			httpOnly: true,
			//expires: new Date(Date.now() - 3600000), // new Date(0)
			maxAge: 0,
			secure: process.env.NODE_ENV === 'production',
		})

		// redirect the user
		throw redirect(302, '/login')
	}
}

export const actions = { deleteUser }