<style>
	article {
		margin-bottom: 2em;
		border-bottom: 1px solid #eee;
	}
</style>

<script>
	export let data;
	import placeholder from '$lib/assets/placeholder.jpg';
	import { photoSrcCheck } from "$lib/utils.js";


	import { locale } from "$lib/i18n";

	$: formatDate = (date) => {
		// Create a locale specific timestamp
		return date.toLocaleDateString($locale, {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
	

	$: ({ post } = data);

</script>

<div>
	{#each post as p}
		<article class="flex">
			{#if photoSrcCheck(p.photo)}
				<img src={p.photo} alt="úvodní fotka">
			{:else}
				<img src={placeholder} alt="placeholder">
			{/if}
			<div>
				<a class="blog-link" href="/blog/{p.id}">{p.title}</a><br>
				<small>{formatDate(p.date)} | {p.seen} zobrazení</small>
				<!--<p>{perex}</p>-->
			</div>
			
		</article>
	{/each}
</div>
