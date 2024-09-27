<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { Plus, Coffee, House } from 'lucide-svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">Xbloomdb</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="http://github.com/qgriffith"
					target="_blank"
					rel="noreferrer"
				>
					Github
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://xbloom.com"
					target="_blank"
					rel="noreferrer"
				>
					Xbloom
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/DYG6Jxte9C"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Hidden below Tailwind's large breakpoint -->
		<div id="sidebar-left" class="p-1">
			<TreeView>
				<TreeViewItem>
					<svelte:fragment slot="lead"><House/></svelte:fragment>
					<a href="/" >Home</a>
				</TreeViewItem>
				<TreeViewItem>
					<svelte:fragment slot="lead"><Coffee/></svelte:fragment>
					<a href="/recipes">Recipes</a>
				</TreeViewItem>
				<TreeViewItem>
					<svelte:fragment slot="lead"><Plus/></svelte:fragment>
					<a href="/recipe/add">Add Recipe</a>
				</TreeViewItem>
			</TreeView>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>

