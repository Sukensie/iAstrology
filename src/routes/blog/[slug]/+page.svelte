<script>
	export let data;
	import placeholder from "$lib/assets/placeholder.jpg";

	$: ({ post } = data)

</script>

<p><a href="../blog">&lt; zpět na seznam článků</a></p>
<h1>{post.title}</h1>
<small>18.7.2023 | 457 zobrazení | Rozálie Nabuřená</small>

<section>
	<div class="flex">
		<img src={placeholder} alt="placeholder">
		<p>TODO perex</p>
	</div>
	
	<div>{@html post.text}</div>
</section>
