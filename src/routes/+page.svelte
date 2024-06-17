<script> 
    //components
    import "../styles.css"
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
            <div class="col-lg-6 col-md-12 d-flex">
                <div class="vk-post flex-fill">
                    <div class="post-header">НОВОСТЬ #1</div>
                    <p>Мы открылись! </p>
                    <span class="opt-post">
                        <ul>
                            <li><a class="read-more-btn" href="/news/1">Читать подробнее</a></li>
                        </ul>
                    </span>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 d-flex">
                <div class="vk-post flex-fill">
                    <div class="post-header">НОВОСТЬ #2</div>
                    <p>Вливайся в игровую индустрию!</p>
                    <span class="opt-post">
                        <ul>
                            <li><a class="read-more-btn" href="/news/2">Читать подробнее</a></li>
                        </ul>
                    </span>
                </div>
            </div>
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

    .vk-post {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        background-color: #1c1c1c;
        padding: 20px;
        border-radius: 5px;
        margin-bottom: 35px;
        margin: 5px;
        flex-grow: 1;
    }

    .vk-post > .post-header {
        overflow: hidden;
        color: #fff;
        width: auto;
        margin: -20px -20px 7px -20px;
        background-image: url('../../assets/img/no-post-image.png');
        background-size: cover;
        background-position: center;
        padding: 25px 20px;
        font-weight: 600;
        -webkit-box-shadow: inset 0 -120px 70px -70px #1c1c1c, inset 0 -40px 20px -20px #1c1c1c;
        box-shadow: inset -1px -16px 70px -70px #1c1c1c, inset 0 -40px 20px -20px #1c1c1c;
        font-size: 20px;
    }

    .vk-post > .opt-post {
        display: block; 
        margin-top: 15px;
        color: #ffffff;
        margin-top: auto; /* Push the opt-post to the bottom */
    }

    .vk-post > .opt-post > ul {
        margin-top: 35px;
    }

    .vk-post > .opt-post > ul > li {
        display: inline;
        font-size: 18px;
        margin: 0px 5px;
    }

    .vk-post > .opt-post > ul > li > a {
        padding: 5px 10px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        margin: -6px 10px;
        float: right;
        transition: 0.4s;
    }

    .vk-post > .opt-post > ul > li > a:hover {
        color: #303030!important;
        background: #c2c2c2;
    }

    .read-more-btn {
        background-color: #FF9800;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s, color 0.3s;
        text-decoration: none; 
    }

    .read-more-btn:hover, .read-more-btn:focus {
        background-color: #c67600;
        color: #fff;
        text-decoration: none; 
    }

    @media (max-width: 768px) {
        .container {
            padding: 10px;
        }

        .row {
            flex-direction: column;
            align-items: center;
        }

        .col-lg-6, .col-md-12 {
            width: 100%;
            padding: 10px;
        }
    }
</style>
