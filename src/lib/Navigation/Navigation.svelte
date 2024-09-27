<script lang="ts">
	import { House, Coffee, Plus } from 'lucide-svelte';
	import { getDrawerStore } from "@skeletonlabs/skeleton";

	const drawerStore = getDrawerStore();


	function drawerClose(): void {
		drawerStore.close();
	}
</script>
<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}><span class="p-2"><House /></span>Home</a></li>
		<li><a href="/recipes" on:click={drawerClose}><span class="p-1"><Coffee /></span>Recipes</a></li>
		<li><a href="/recipe/add" on:click={drawerClose}><span class="p-1"><Plus /></span>New</a></li>
	</ul>
</nav>