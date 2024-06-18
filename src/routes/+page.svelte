<script> 
    //components
    import "../styles.css"
    import ArticleList from "../lib/components/pages/news/ArticleList.svelte";

    /** @type {import('./$types').PageData} */
    export let data
</script>

<svelte:head>
    <title>FunnyCraft</title>
    <meta name="МаЙнКрАфТ" content="лучший сервер майнкрафт" />
</svelte:head>

<div class="container">
    <!-- Блок "О нашем проекте" -->
    <article id="info" class="info">
        <h3>
            <i class="far fa-question-circle"></i> Немного о нашем проекте
        </h3>
        <div class="row">
            <div class="col-lg-8">
                <div class="content-section">
                    <p>Игровой проект <b>FunnyCraft</b> не имеет аналогов среди проектов MINECRAFT. У нас имеется собственный игровой лаунчер, который обеспечивает скачивание и установку игрового клиента в 1 клик. Собственный игровой сайт, который удобен большинству пользователей своей простотой и лаконичностью.</p>
                    <p> Присоединяйтесь!</p>
                </div>
            </div>
        </div>
    </article>

    <!-- Блок "Последние новости" -->
    <article class="news" id="news">
        <h3>
            <i class="fas fa-newspaper"></i> Последние новости
        </h3>
        <div class="row mb-5 mt-5">
            <ArticleList articles = {data.articles}/> 
        </div>
    </article>
</div>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        min-height: 80vh;
    }

    p, h3 {
        color: #efefef !important;
    }

    a {
        color: #FF9800;
        transition: 0.2s;
    }

    a:hover,
    a:focus {
        color: #c67600;
        text-decoration: none;
    }

    .info {
        margin-bottom: 50px; /* Add margin-bottom to create space */
        min-height: 30vh;
    }

    @media (max-width: 768px) {
        .container {
            padding: 10px;
        }

        .row {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
