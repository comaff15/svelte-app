<script>
	import {page} from '$app/stores'
    import ArticleList from "../../lib/components/pages/news/ArticleList.svelte";

    /** @type {import('./$types').PageData} */
    export let data
</script>

<svelte:head>
    <title>FunnyCraft-Новости</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="news-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <ArticleList articles = {data.articles}/> 
            </div>
        </div>
    </div>
</article>