<script>
    export let data;

    $: ({ post } = data);


</script>


<a href="./postDetail?a=create"><button>Vytvořit příspěvek</button></a>

<h2>Historie příspěvků</h2>

<!-- 
    
    Do popup dialogs for confirmation
    Think about not loading all posts
    Make login

-->
<ul>
	{#each post as p}
		<div>
            <h3>{p.title}</h3>
            <a href="./postDetail?a={p.id}"><button>Upravit</button></a>
            <form action="?/deletePost&a={p.id}" method="post">
                <button>Smazat</button>
            </form>
        </div>
	{/each}
</ul>