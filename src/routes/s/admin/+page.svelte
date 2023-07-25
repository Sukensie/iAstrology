<script>
    export let data;

    $: ({ post } = data);

</script>


<a href="./postDetail?create"><button>Vytvořit příspěvek</button></a>

<h2>Historie příspěvků</h2>

<!-- 
    
    Make buttons for edit or delete blog posts
    Think about not loading all posts
    Make login

-->
<ul>
	{#each post as p}
		<li><a href="./postDetail?{p.id}">{p.title}</a></li>
	{/each}
</ul>