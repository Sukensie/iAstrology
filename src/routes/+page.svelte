<script>
    import { horoscopes } from "./blog/horoscopes";
    import placeholder from '$lib/assets/placeholder.jpg';
</script>

<style>
    .tile {
        border: 1px solid #ccc;
    }
    .flex {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
    .flex .tile {
        order: 5;
        text-align: center;
    }
    .flex .full-size {
        flex: 100%;
        order: 1;
    }
</style>

<h1>iAstrology</h1>
<h2>Horoskop na dnešní den</h2>

<div class="flex">
    {#each horoscopes as horoscope}
        {#if horoscope.slug == 'beran' }
            <div class="tile full-size">
                <img src="{placeholder}" alt="icon">
                <h3>{horoscope.title}</h3>
                <span>{horoscope.period}</span>
                <p>{@html horoscope.content}</p>
                <a href="#">Zobrazit více</a>
            </div>
        {:else}
            <div class="tile">
                <img src="{placeholder}" alt="icon">
                <h3>{horoscope.title}</h3>
                <span>{horoscope.period}</span>
                <a href="#">Zobrazit více</a>
            </div>
        {/if}
    {/each}
    <a href="#">Zobrazit více</a>
</div>