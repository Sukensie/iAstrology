<script>
	export let data;
	import placeholder from "$lib/assets/placeholder.jpg";
</script>

<p><a href="../blog">&lt; zpět na seznam článků</a></p>
<h1>{data.post.title}</h1>
<small>18.7.2023 | 457 zobrazení | Rozálie Nabuřená</small>

<section>
	<div class="flex">
		<img src={placeholder} alt="placeholder">
		<p>{data.post.perex}</p>
	</div>
	
	<div>{@html data.post.content}</div>
</section>
