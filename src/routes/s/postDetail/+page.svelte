<script>
    export let data;

    $: ({ post } = data)

    /** @type {import('./$types').ActionData} */
    export let form;

    function handleSubmit(){
        if(form?.incorrect || form?.missing){
            alert("Vyplňte všechna pole!")
        }
        else{
            alert("Nový příspěvek vytvořen!")
        }
    }

</script>

{#if post === undefined}
    <form action="?/create" method="post">

        <label for="title">Název</label>
        <input id="title" name="title"/>

        <label for="perex">Perex</label>
        <input id="perex" name="perex"/>

        <label for="photo">Náhledová fotka</label>
        <input id="photo" name="photo"/>

        <label for="tags">Tagy</label>
        <input id="tags" name="tags"/>

        <label for="text">Text</label>
        <textarea id="text" name="text">
        </textarea>

        <button>Vytvořit</button>
    </form>
{:else}
    <form action="?/edit&a={post.id}" method="post">
        <label for="title">Název</label>
        <input id="title" name="title" value="{post.title}"/>

        <label for="perex">Perex</label>
        <input id="perex" name="perex" value="{post.perex}"/>

        <label for="photo">Náhledová fotka</label>
        <input id="photo" name="photo" value="{post.photo}"/>

        <label for="tags">Tagy</label>
        <input id="tags" name="tags" value="{post.tags}"/>

        <label for="text">Text</label>
        <textarea id="text" name="text" value="{post.text}"></textarea>

        <button on:click={() => {alert("Příspěvek upraven!")}}>Upravit</button>
    </form>
{/if}