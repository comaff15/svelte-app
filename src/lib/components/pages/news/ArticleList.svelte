<script>
    //import {page} from '$app/stores';
    import ArticlePreview from './ArticlePreview.svelte';

    export let articles;
</script>



{#if articles}
    {#each articles as article (article.slug)}
        <ArticlePreview {article}/>
    {/each}
{:else}
    <div class="article-prewiew">Здесь еще нет новостей</div>
{/if}