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

	let open;
</script>

<nav>
	<a href="/">{$t("global.navbar.home")}</a>
	<a href="/blog">Blog</a>
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