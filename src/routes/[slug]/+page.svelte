<script>
	export let data;
	import placeholder from '$lib/assets/placeholder.jpg';
</script>

<div class="flex">
	<img src={placeholder} alt={data.horoscope.title}>
	<div>
		<h1>{data.horoscope.title}</h1>
		<p>{data.horoscope.period}</p>
	</div>
</div>


<div>{@html data.horoscope.content}</div>
