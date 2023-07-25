<script>
	export let data;
	import placeholder from "$lib/assets/placeholder.jpg";
	import { locale } from "$lib/i18n";

	$: ({ post } = data)

	// Create a locale specific timestamp
    $: formattedDate = post.date.toLocaleDateString($locale, {
			year: "numeric",
			month: "long",
			day: "numeric",
	});


	//very simple url regex check
	function photoSrcCheck(url) {
		//const regex = /^http.*\.(jpg|jpeg|png|gif|webp)$/i;
		const regex = /^http/i;
		return regex.test(url);

	}

</script>

<p><a href="../blog">&lt; zpět na seznam článků</a></p>
<h1>{post.title}</h1>
<small>{formattedDate} | {post.seen} zobrazení | Rozálie Nabuřená</small>

<section>
	<div class="flex">
		{#if photoSrcCheck(post.photo)}
			<img src={post.photo} alt="úvodní fotka">
		{:else}
			<img src={placeholder} alt="placeholder">
		{/if}
		
		
		<p>TODO perex</p>
	</div>	
	<div>{@html post.text}</div>
</section>
