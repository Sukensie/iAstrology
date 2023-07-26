<script>
    import { page } from '$app/stores';

    export let data

    $: ({ post } = data);

    $: pageSize = data.limit
    $: totalItems = data.total
    $: totalPages = Math.ceil(totalItems / pageSize)
</script>


<a href="../postDetail?a=create"><button>Vytvořit příspěvek</button></a>

<h2>Historie příspěvků</h2>

<!-- 
    
    Do popup dialogs for confirmation
    Pagination with lots of pages
    Better db hosting -> is the db slow?

-->
<ul>
	{#each post as p}
		<div>
            <h3>{p.title}</h3>
            <a href="../postDetail?a={p.id}"><button>Upravit</button></a>
            <form action="?/deletePost&a={p.id}" method="post">
                <button>Smazat</button>
            </form>
        </div>
	{/each}
</ul>

<div class="paginaton">
    {#each Array(totalPages) as _, idx}
        <a href="/s/admin/{idx + 1}">{idx + 1}</a>
    {/each}
</div>