import { PUBLIC_API_URL } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
import { getFormattedDate } from '$lib/utils.js';
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const data = await request.formData();



		const newFormData = new URLSearchParams();
		for (let pair of data.entries()) {
			newFormData.append(pair[0].toString(), pair[1].toString());
		}
		newFormData.append('created_at', getFormattedDate());

		const api_endpoint = `${PUBLIC_API_URL}/recipe/create`;
		try {
			const response = await fetch(api_endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: newFormData.toString()
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

		} catch (error) {
			console.error("Failed to fetch recipes:", error);
		}
		redirect(303, "/recipes");
	}
};