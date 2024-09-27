<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();

	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr />
<Navigation/>
</Drawer>
<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
            <span>
                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
					</button>
					<strong class="text-xl uppercase">Xbloomdb</strong>
				</div>
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
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft">
	<Navigation />

	</svelte:fragment>
	<slot />
</AppShell>

