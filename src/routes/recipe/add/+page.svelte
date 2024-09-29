<script>
import { onMount } from "svelte";
export let data;
import {PUBLIC_API_URL} from '$env/static/public';
const brew_endpoint = `${PUBLIC_API_URL}/brewers`;
const roast_endpoint = `${PUBLIC_API_URL}/roasts`;
let brewers = [];
let roasts = [];
let username = '';
import {page} from "$app/stores";
import {goto} from "$app/navigation"; onMount(() => {
		if(!$page.data?.session) {
		goto('/');
		return;
	}
});

onMount(async () => {
	console.log("onMount");
	try {
	const response = await fetch(brew_endpoint);

	if (!response.ok) {
	throw new Error(`HTTP error! status: ${response.status}`);
}

	brewers = await response.json();
} catch (error) {
	console.error("Failed to fetch brewers:", error);
}
	try {
		const response = await fetch(roast_endpoint);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		roasts = await response.json();
	} catch (error) {
		console.error("Failed to fetch roasts:", error);
	}
});

</script>
{#if $page.data?.session}
	<div>Protected</div>
{/if}
<main class="flex-auto">
	<form method="POST">
	<div class="space-y-2">
	<label class="label">
		<span class="flex-auto">Title</span>
		<input class="input" title="title" name="title" type="text" placeholder="recipe title" />
	</label>
		<label class="label">
			<span class="flex-auto">Share Link</span>
			<input class="input" title="link" name="link" type="url" placeholder="http://share" />
		</label>
		<div class="space-y-2">
			<span>Temp</span>
			<label class="flex items-center space-x-2">
				<input class="radio" type="radio" name="temp" value="hot" />
				<p>Hot</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="radio" type="radio" name="temp" value="cold" />
				<p>Cold</p>
			</label>
			<label>
				<span>Brew Equipment</span>
				<select name="brewer_id" class="select">
					{#each brewers as brewer}
						<option value="{brewer.id}">{brewer.type}</option>
					{/each}
				</select>
			</label>
			<label>
				<span>Roast Level</span>
				<select name="roast_id" class="select">
					{#each roasts as roast}
						<option value="{roast.id}">{roast.level}</option>
					{/each}
				</select>
			</label>
			<label class="label">
				<span class="flex-auto">Roaster</span>
				<input class="input" name="roaster" title="creator" type="roaster" placeholder="Black and White" />
			</label>
			<div class="space-y-2">
				<span>Recipe Source</span>
				<label class="flex items-center space-x-2">
					<input class="radio" type="radio" name="creator" value="roaster" />
					<p>Roaster</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="radio" type="radio" name="creator" value="custom" />
					<p>Custom</p>
				</label>
				<span>Machine</span>
				<label class="flex items-center space-x-2">
					<input class="radio" type="radio" name="machine" value="studio" />
					<p>Stuido</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="radio" type="radio" name="machine" value="orignal" />
					<p>Orignal</p>
				</label>
			<label class="label">
				<span class="flex-auto">Shop Link</span>
				<input class="input" title="shop_link" name="shop_link" type="url" placeholder="http://shop" />
			</label>
			<input type="hidden" name="user_id" value="1" />
				{#if $page.data?.session}
					<input type="hidden" name="oauth_username" value="{$page.data.session.user?.name}" />
					{:else}
					<input type="hidden" name="oauth_username" value="admin" />
					{/if}
		</div>

	</div>
	</div>
		<div class="py-4">
		<button type="submit" class="btn variant-filled">Submit</button>
		</div>
	</form>
</main>