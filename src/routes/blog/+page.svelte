<style>
	article {
		margin-bottom: 2em;
		border-bottom: 1px solid #eee;
	}
</style>

<script>
	export let data;
	import placeholder from '$lib/assets/placeholder.jpg';

	import { locale } from "$lib/i18n";

	//TODO: doesnt reactively change to language change
	function formatDate(date) {
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
			<img src={placeholder} alt="placeholder">
			<div>
				<a class="blog-link" href="/blog/{p.id}">{p.title}</a><br>
				<small>{formatDate(p.date)} | {p.seen} zobrazení</small>
				<!--<p>{perex}</p>-->
			</div>
			
		</article>
	{/each}
</div>
