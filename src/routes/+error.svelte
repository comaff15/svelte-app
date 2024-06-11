<script>
    import {page} from '$app/stores'
</script>

<svelte:head>
    <title>{$page.status}</title>
</svelte:head>

<article>
    {#if $page.status === 404}
        <h1>Страница не найдена</h1>
    {:else}
        <h1>Что-то пошло не так</h1>
    {/if}
</article>

<style>
    h1 {
        margin: 4em 0;
        text-align: center;
    }
</style>