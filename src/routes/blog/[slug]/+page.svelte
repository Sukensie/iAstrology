<script>
	export let data;

	$: ({ post } = data)

</script>

<h1>{ post.title }</h1>
<div>{@html post.text }</div>
