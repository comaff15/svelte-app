<script>
	import {page} from '$app/stores'
    import ArticleList from "../../lib/components/pages/news/ArticleList.svelte";
	import Pagination from "../../lib/components/pages/news/Pagination.svelte";

    /** @type {import('./$types').PageData} */
    export let data
	$: p = +($page.url.searchParams.get('page') ?? '1');
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
                <Pagination pages = {data.pages} {p} href={(p) => `/?&page=${p}`}/>
            </div>
        </div>
    </div>
</article>