<script>
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
            </div>
        </section>
    </section>
</article>