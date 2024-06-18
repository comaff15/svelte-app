<script>
	import {page} from '$app/stores'
    import ArticleList from "../../lib/components/pages/news/ArticleList.svelte";

    /** @type {import('./$types').PageData} */
    export let data
</script>

<svelte:head>
    <title>FunnyCraft-Новости</title>
    <meta name="news" content="Новости" />
</svelte:head>

<div class="container">
    <article class="news" id="news">
        <div class="clear-fix-container">
            <h3>
                <i class="fas fa-newspaper"></i> Все новости
            </h3>
            <div class="row mb-5 mt-5">
                    <ArticleList articles = {data.articles}/> 
            </div>
        </div>
    </article>
</div>

<style>
    h3 {
        color: #efefef !important;
    }
    .container{
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;
        padding: 20px;
    }
</style>