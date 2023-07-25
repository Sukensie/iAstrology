<style>
	article {
		margin-bottom: 2em;
		border-bottom: 1px solid #eee;
	}
</style>

<script>
	export let data;
	import placeholder from '$lib/assets/placeholder.jpg';
</script>

<div>
	{#each data.summaries as { slug, title, perex }}
		<article class="flex">
			<img src={placeholder} alt="placeholder">
			<div>
				<a href="/blog/{slug}">{title}</a><br>
				<small>18.7.2023 | 457 zobrazení</small>
				<p>{perex}</p>
			</div>
			
		</article>
	{/each}
</div>
