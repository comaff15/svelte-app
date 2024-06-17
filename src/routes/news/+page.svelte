<script>
	import {page} from '$app/stores'
    import ArticleList from "../../lib/components/pages/news/ArticleList.svelte";
	import Pagination from "../../lib/components/pages/news/Pagination.svelte";

    /** @type {import('./$types').PageData} */
    export let data
    console.log(data.articles)
	 $: p = +($page.url.searchParams.get('page') ?? '1');
</script>
<article class="news-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <ArticleList articles={data.articles}/> 
                <Pagination pages = {data.pages} {p} href={(p) => `/?&page=${p}`}/>
            </div>
        </div>
    </div>
</article>