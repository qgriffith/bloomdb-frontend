<script>
	import { onMount } from "svelte";
	export let data;
	import {PUBLIC_API_URL} from '$env/static/public';
	const api_endpoint = `${PUBLIC_API_URL}/recipe/${data.slug}`;
	let recipe = [];

	onMount(async () => {
		console.log("onMount");
		try {
			const response = await fetch(api_endpoint);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			recipe = await response.json();
			console.log(recipe);
		} catch (error) {
			console.error("Failed to fetch recipes:", error);
		}
	});
</script>
<main>
	<div class="card variant-filled">
		<header class="card-header">{recipe.title}</header>
		<section class="p-4">
			<ul class="list">
				<li>Link: <a class="p-2 bg-secondary-hover-token anchor" href="{recipe.link}">Recipe</a></li>
				<li>Temp: <span class="p-2">{recipe.temp}</span></li>
				<li>Brewer: <span class="p-2">Omni</span></li>
				<li>Roaster: <span class="p-2">{recipe.roaster}</span></li>
				<li>Roast Level: <span class="p-2">Light-Medium</span></li>
				<li>Creator: <span class="p-2">{recipe.creator}</span></li>
				<li>Buy: <a class="p-2 bg-secondary-hover-token anchor" href="{recipe.shop_link}">Shop</a></li>
			</ul>
		</section>
	</div>
</main>