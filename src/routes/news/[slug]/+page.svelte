<script>
    import CommentContainer from "./CommentContainer.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.news.title}</title>
</svelte:head>

<article class="news-page">
    <section class="banner">
        <div class = "container">
            <h1>{data.news.title}</h1>
        </div>
    </section>
    <section class="container page">
        <section class="row news-content">
            <div class="col-xs-12">
                <div>
                    {@html data.news.body}
                </div>
                <ul class="tag-list">
                    {#each data.news.tagList as tag}
                        <li class=" tag-deffault tag-pill tag-outline">{tag}</li>
                    {/each}
                </ul>
            </div>
        </section>
        <hr/>
        <section class="news-actions"/>
        <section class="row">
                <CommentContainer comments={data.comments} user={data.user} errors={[]}/>
        </section>
    </section>
</article>