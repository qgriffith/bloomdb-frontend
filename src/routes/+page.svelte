<script>
	import {signIn, signOut} from "@auth/sveltekit/client"
	import {page} from "$app/stores";
</script>
<div class="py-10">
	<p>
		{#if $page.data.session}
        <span>
            <small>Signed in as</small><br/>
            <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
			<button on:click={() => signOut()} class="anchor">Sign out</button>
		{:else}
			<span>You are not signed in</span>
			<button class="anchor" on:click={() => signIn("google")}>
				Sign In with Google
			</button>
		{/if}
	</p>
	<div class="card justify-center items-center">
		<header class="card-header h-1 font-bold py-4">Xbloomdb Community Site</header>
		<section class="p-4">This a unofficial Xbloom database for sharing recipe links for the Xbloom and Xbloom Studio .</section>
	</div>
</div>
<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
