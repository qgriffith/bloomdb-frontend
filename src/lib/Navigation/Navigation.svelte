<script lang="ts">
	import { House, Coffee, Plus, GithubIcon, MessageCircleMore, Link } from 'lucide-svelte';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

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
<hr class="!border-dashed" />
<h6 class="h6">External Links</h6>
<nav class="list-nav p-4">
<ul>
	<li><a href="http://github.com/qgriffith"  target="_blank" on:click={drawerClose}><span class="p-2"><GithubIcon /></span>Github</a></li>
	<li><a href="https://xbloom.com"  target="_blank" on:click={drawerClose}><span class="p-1"><Link /></span>Xbloom</a></li>
	<li><a href="https://discord.gg/DYG6Jxte9C" target="_blank" on:click={drawerClose}><span class="p-1"><MessageCircleMore /></span>Discord</a></li>
</ul>
</nav>
