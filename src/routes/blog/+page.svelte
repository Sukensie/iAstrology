<style>
	article {
		margin-bottom: 2em;
		border-bottom: 1px solid #eee;
		align-items: flex-start;
	}
	img {
		object-fit: contain;
		max-width: 150px;
	}
	span.tag {
		background: red;
		color: white;
		padding: 0.35em 0.75em;
		display: block;
		border-radius: 1em;
		font-size: 1em;
	}
	.flex {
		gap: 0.35em;
	}
	.blog-link {
		font-size: 1.5em;
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
				<div class="flex">
					{#each p.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
				<p>{p.perex}</p>
			</div>
		</article>
	{/each}
