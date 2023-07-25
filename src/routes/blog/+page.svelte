<style>
	article {
		margin-bottom: 2em;
		border-bottom: 1px solid #eee;
	}
</style>

<script>
	export let data;
	import placeholder from '$lib/assets/placeholder.jpg';

	$: ({ post } = data)
</script>

<div>
	{#each post as p}
		<article class="flex">
			<img src={placeholder} alt="placeholder">
			<div>
				<a href="/blog/{p.id}">{p.title}</a><br>
				<small>{p.date} | {p.seen} zobrazení</small>
				<!--<p>{perex}</p>-->
			</div>
			
		</article>
	{/each}
</div>
