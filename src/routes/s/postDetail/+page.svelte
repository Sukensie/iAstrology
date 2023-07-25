<script>
    export let data;

    $: ({ post } = data)

</script>

{#if post === undefined}
    <form action="?/create" method="post">
        <label for="title">Název</label>
        <input id="title" name="title"/>

        <label for="photo">Náhledová fotka</label>
        <input id="photo" name="photo"/>

        <label for="text">Text</label>
        <textarea id="text" name="text">
        </textarea>

        <button>Vytvořit</button>
    </form>
{:else}
    <form action="?/edit&a={post.id}" method="post">
        <label for="title">Název</label>
        <input id="title" name="title" value="{post.title}"/>

        <label for="photo">Náhledová fotka</label>
        <input id="photo" name="photo" value="{post.photo}"/>

        <label for="text">Text</label>
        <textarea id="text" name="text" value="{post.text}"></textarea>

        <button>Upravit</button>
    </form>
{/if}