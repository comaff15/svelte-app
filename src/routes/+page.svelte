<script> 
    //components
    import "../styles.css"
</script>

<svelte:head>
    <title>Главная</title>
    <meta name="МаЙнКрАфТ" content="лучший сервер майнкрафт" />
</svelte:head>
<dev class="container">
    <article id="info" class="info">
        <h3>
            <i class="far fa-question-circle"></i> Немного о нашем проекте
        </h3>
        <div class="row">
        <div class="col-lg-8">
            <div class="content-section">
                <p>Игровой проект <b>HEXWORLD</b> не имеет аналогов среди проектов MINECRAFT. У нас имеется собственный игровой лаунчер, который обеспечиваниет скачивание и установку игрового клиента 1 кликов. Собственный игровой сайт который удобен большинству пользователей своей простотой и лакончностью.</p>
                <p> Присоединяйтесь!</p>
                <br>
            </div>
        </div>

    </article>

    <article class = "news" id="news">
        <div class="row mb-5 mt-5">
            <div class="col-lg-6 col-md-12">
            <div class="vk-post">
                <div class="post-header"><i class="fas fa-newspaper"></i> НОВОСТЬ</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span class="opt-post">
                <ul>
                    <li><a class="text-right" href="#">Читать подробне..</a></li>
                </ul>
                </span>
            </div>
            </div>

            <div class="col-lg-6 col-md-12">
                <div class="vk-post">
                <div class="post-header"><i class="fas fa-newspaper"></i> НОВОСТЬ #2</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span class="opt-post">
                    <ul>
                        <li><a class="text-right" href="#">Читать подробне..</a></li>
                    </ul>
                </span>
                </div>
            </div>
        </div>

    </article>
</dev>

<style>
    * {
    padding: 0;
    margin: 0;
}

.container {
    width: 1200px; /* Set your desired fixed width */
    margin: 0 auto; /* Center the container */
    padding: 20px; /* Optional: add some padding */
}

p {
    color: #efefef!important;
}

a {
    color: #FF9800;
    transition: 0.2s;
}

a:hover, a:focus {
    color: #c67600;
    text-decoration: none;
}

.vk-post {
    overflow: hidden;
    display: block;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 5px; 
    margin-bottom: 35px;
}

.vk-post > .post-header {
    overflow: hidden;
    color: #fff;
    width: auto;
    margin: -20px -20px 7px -20px;
    background-image: url('../../assets/img/no-post-image.png');
    padding: 25px 20px;
    font-weight: 600;
    -webkit-box-shadow: inset 0 -120px 70px -70px #1c1c1c, inset 0 -40px 20px -20px #1c1c1c;
    box-shadow: inset -1px -16px 70px -70px #1c1c1c, inset 0 -40px 20px -20px #1c1c1c;
    font-size: 20px;
}

.vk-post > .opt-post {
    display: block; 
    margin-top: 15px;
    color: #c2c2c2;
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
    color: #c2c2c2;
    padding: 5px 10px;
    border: 2px solid #c2c2c2;
    border-radius: 10px;
    margin: -6px 10px;
    float: right;
    transition: 0.4s;
}

.vk-post > .opt-post > ul > li > a:hover {
    color: #303030!important;
    background: #c2c2c2;
}

.vk-post > .opt-post > ul > li > a:hover {
    text-decoration: none;
}

</style>    