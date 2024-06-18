<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>

<svelte:head>
    <title>{data.news.title}</title>
</svelte:head>

<article class="news-page">
    <section class="container page">
        <section class="banner">
            <div class = "container">
                <h1>{data.news.title}</h1>
            </div>
        </section>
        <section class="row news-content">
            <div class="col-xs-12">
                <div>
                    {@html data.news.body} 
                </div>
            </div>
        </section>
    </section>
</article>

<style>
    .banner {
        background-color: #1c1c1c;
        color: #efefef;
        padding: 20px 0;
        text-align: center;
        max-width: 1130px;
        color: #FF9800;

    }

    .container {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 15px;
        overflow: hidden;
    }

    .banner h1 {
        font-size: 2rem;
        word-wrap: break-word; 
    }

    .container.page {
        margin-top: 20px;
    }

    .news-content {
        margin-top: 20px;
    }

    .news-content  {
        font-size: 1rem;
        color: #efefef;
    }
  </style>