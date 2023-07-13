<script>
    import { horoscopes } from "./blog/horoscopes";

</script>

<style>
    .tile {
        border: 1px solid #ccc;
    }
    .flex {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
    }
</style>

<h1>iAstrology</h1>
<h2>Horoskop na dnešní den</h2>

<div class="flex">
    {#each horoscopes as horoscope}
        <div class="tile">
            <img src="{horoscope.icon}" alt="icon">
            <h3>{horoscope.title}</h3>
            <span>{horoscope.period}</span>
        </div>
    {/each}
</div>