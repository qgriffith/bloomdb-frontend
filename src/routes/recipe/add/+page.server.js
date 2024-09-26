import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const data = await request.formData();

		function getFormattedDate() {
			const date = new Date();

			const year = date.getUTCFullYear();
			const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
			const day = String(date.getUTCDate()).padStart(2, '0');

			const hours = String(date.getUTCHours()).padStart(2, '0');
			const minutes = String(date.getUTCMinutes()).padStart(2, '0');
			const seconds = String(date.getUTCSeconds()).padStart(2, '0');

			return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
		}

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
	}
};