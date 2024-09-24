<script>
	import { onMount } from "svelte";
	import {PUBLIC_API_URL} from '$env/static/public';

	const api_endpoint = `${PUBLIC_API_URL}/recipes`;
	let recipes = [];

	onMount(async () => {
		console.log("onMount");
		try {
			const response = await fetch(api_endpoint);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			recipes = await response.json();
			console.log(recipes);
		} catch (error) {
			console.error("Failed to fetch recipes:", error);
		}
	});
</script>
<main>
	<p class="h2">Recipes</p>
	<dl class="list-dl">
		{#each recipes as recipe}
			<div>
				<span class="badge bg-orange-800">☕</span>
				<span class="flex-auto">
					<dt class="font-bold"><a class="anchor" href="recipe/{recipe.slug}">{recipe.title}</a></dt>
					<dd class="text-sm opacity-50">{recipe.roaster}</dd>
				</span>
			</div>
		{/each}
	</dl>
</main>

