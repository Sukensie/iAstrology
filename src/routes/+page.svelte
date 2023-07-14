<script>
    import { horoscopes } from "./horoscopes";
    import placeholder from '$lib/assets/placeholder.jpg';
	import { t, locale } from "$lib/i18n";
   
    let shownNumber = 3;

    // Create a locale specific timestamp
    $: time = new Date().toLocaleDateString($locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
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
    .tile a {
        text-decoration: none;
        color: black;
    }
    .tile a a {
        text-decoration: underline;
    }
    .hidden {
        display: none;
    }
</style>

<h1>iAstrology</h1>
<h2>{$t("homepage.todayHoroscopes", {date: time})}</h2>

<div class="flex">
    {#each horoscopes.slice(0,shownNumber) as horoscope, i}
        {#if horoscope.slug == 'beran' }
            <div class="tile full-size">
                <a href="/{horoscope.slug}">
                    <img src="{placeholder}" alt="icon">
                    <h3>{horoscope.title}</h3>
                    <span>{horoscope.period}</span>
                    <p>{@html horoscope.content}</p>
                    <a href="/{horoscope.slug}">Zobrazit více</a>
                </a>
            </div>
        {:else}
            <div class="tile">
                <a href="/{horoscope.slug}">
                    <img src="{placeholder}" alt="icon">
                    <h3>{horoscope.title}</h3>
                    <span>{horoscope.period}</span><br>
                    <a href="/{horoscope.slug}">Zobrazit více</a>
                </a>
            </div>
        {/if}
    {/each}
   
</div>
<button class="{shownNumber == horoscopes.length ? 'hidden' : ''}" on:click={() => shownNumber = horoscopes.length}>Zobrazit více horoskopů</button>