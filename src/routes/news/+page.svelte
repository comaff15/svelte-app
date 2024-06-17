<script>
	import {page} from '$app/stores'
    import ArticleList from "../../lib/components/pages/news/ArticleList.svelte";

    /** @type {import('./$types').PageData} */
    export let data
</script>

<article class="news-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-9">
                <ArticleList articles = {data.articles}/> 
            </div>
        </div>
    </div>
</article>