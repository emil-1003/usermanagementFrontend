import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals, params }) => {
	// redirect user if not logged TODO: remember to only allow to edit owned users
    if (!locals.user) {
		throw redirect(302, '/login')
	}

	let user = [];

	const res = await fetch(`http://localhost:8585/api/v1/users/${params.id}`, {
		method: 'GET',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
	});

	user = await res.json()

	return {
	  user
	};
}

const edit = async ({ locals, request, params }) => {
	const data = await request.formData()
    const name = data.get('name')
	const email = data.get('email')

	if (typeof name !== 'string' || typeof email !== 'string' || !name || !email) {
		return fail(400, { invalid: true });
	}

	// MAKE PUT EDIT REQUEST
	const response = await fetch(`http://localhost:8585/api/v1/users/${params.id}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
		body: JSON.stringify({ name: name, email: email })
	});
	
	if (!response.ok) {
		console.log(response.status)
		return fail(400, { user: true });
	}

	throw redirect(303, `/users/${params.id}`)
}

const newpassword = async ({ locals, request, params }) => {
	const data = await request.formData()
    const newPassword = data.get('new-password')

	if (typeof newPassword !== 'string' || !newPassword) {
		return fail(400, { invalid: true });
	}

	// MAKE PUT NEW PASSWORD REQUEST
	const response = await fetch(`http://localhost:8585/api/v1/auth/new/password/${params.id}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${locals.user.jwt}`
		},
		body: JSON.stringify({ "newpassword": newPassword })
	});
	
	console.log("url:", `http://localhost:8585/api/v1/auth/new/password/${params.id}`)
	console.log("status:", response.status)

	if (!response.ok) {
		console.log(response.status)
		return fail(400, { user: true });
	}

	throw redirect(303, `/`)
}

export const actions = { edit, newpassword }