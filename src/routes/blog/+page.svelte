<script>
	export let data;

	$: ({ post } = data)
</script>

<ul>
	{#each post as p}
		<li><a href="/blog/{p.id}">{p.title}</a></li>
	{/each}
</ul>
