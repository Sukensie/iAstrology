<style>
	main {
		margin: 0 auto;
		max-width: 80vw;
	}
	nav, footer {
		padding: 1em;
		background: #ccc;
	}
	footer {
		margin-top: 3em;
	}
	.hamburger {
		position: absolute;
		right: 1em;
	}
</style>
<script>
	import { t, locale, locales } from "$lib/i18n";
	import '$lib/global.css';
	//import { Hamburger } from 'svelte-hamburgers';

	export let data

	$: ({ visible } = data)

	let open;
</script>

<nav>
	<a href="/">{$t("global.navbar.home")}</a>
	<a href="/blog">Blog</a>
	{#if visible}
		<a href="/s/admin">Admin</a>
		<a href="/s/login?signout"><button on:click={() => visible = false}>Log Out</button></a>
	{/if}
	<select bind:value={$locale}>
		{#each locales as l}
		  <option value={l}>{l}</option>
		{/each}
	  </select>
</nav>

<main>
	<slot />
</main>

<footer>
	{$t("global.footer")}
</footer>