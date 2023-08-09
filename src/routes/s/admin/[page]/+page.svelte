<script>
    import { page } from '$app/stores';
    import { LightPaginationNav } from 'svelte-paginate'

    function deleteP(e) {
        if(!confirm("Opravdu chcete smazat příspěvk?"))
        {
            e.preventDefault()
            return
        }
    }

    export let data

    $: ({ post } = data);

    $: pageSize = data.limit
    $: totalItems = data.total
    $: totalPages = Math.ceil(totalItems / pageSize) - 1
    $: currentPage = Number($page.params.page);
</script>


<a href="../postDetail?a=create"><button>Vytvořit příspěvek</button></a>

<h2>Historie příspěvků</h2>

<!-- 
    
    Do popup dialogs for confirmation
    Search -> tags and title  
    Better db hosting -> is the db slow?

-->

<form>
    <input placeholder="Vyhledat..."/>
    <button>Vyhledat</button>
</form>

{#each post as p}
    <div>
        <h3>{p.title}</h3>

        <a href="../postDetail?a={p.id}">
            <button>Upravit</button>
        </a>
        
        <form on:submit={deleteP} action="?/deletePost&a={p.id}" method="post">
            <button>Smazat</button>
        </form>
    </div>
{/each}

<LightPaginationNav
  totalItems="{totalItems}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{2}"
  showStepOptions="{true}"
  on:setPage="{(e) => {

    currentPage = e.detail.page;
    window.location.replace("/s/admin/" + e.detail.page);
    }}"
/>