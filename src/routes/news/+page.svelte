<script>
</script>

<svelte:head>
    <title>FunnyCraft-Новости</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="news">
    <section class="news_list">
                <a href="#link3" class="news_item">
            <section class="news_image" style="background-image: url('{New3}');"></section>
            <div class="news_content">
                <h2 class="news_title">Новость 3</h2>
                <p class="news_description">Описание второй новости. Это краткое описание содержания новости.</p>
            </div>
        </a>
        
        <a href="#link2" class="news_item">
            <section class="news_image" style="background-image: url('{New2}');"></section>
            <section class="news_content">
                <h2 class="news_title">Новость 2</h2>
                <p class="news_description">Описание второй новости. Это краткое описание содержания новости.</p>
            </section>
        </a>
        
        <a href="#link1" class="news_item">
            <section class="news_image" style="background-image: url('{New1}');"></section>
            <div class="news_content">
                <h2 class="news_title">Мы открылись!</h2>
                <p class="news_description">Скорее заходи на наш сервер</p>
            </div>
        </a>
        <a href="#link3" class="news_item">
            <section class="news_image" style="background-image: url('{New3}');"></section>
            <div class="news_content">
                <h2 class="news_title">Новость 3</h2>
                <p class="news_description">Описание второй новости. Это краткое описание содержания новости.</p>
            </div>
        </a>
        
        <a href="#link2" class="news_item">
            <section class="news_image" style="background-image: url('{New2}');"></section>
            <section class="news_content">
                <h2 class="news_title">Новость 2</h2>
                <p class="news_description">Описание второй новости. Это краткое описание содержания новости.</p>
            </section>
        </a>
        
        <a href="#link1" class="news_item">
            <section class="news_image" style="background-image: url('{New1}');"></section>
            <div class="news_content">
                <h2 class="news_title">Мы открылись!</h2>
                <p class="news_description">Скорее заходи на наш сервер</p>
            </div>
        </a>

    </section>
</article>

<style>

.news {
    padding-top: 20px; 
    margin-bottom: 20px;
}
.news_list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    
}
.news_item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}
.news_item {
    position: relative;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    max-width: 320px;
    width: 100%;
    text-decoration: none; 
    color: inherit; 
}

.news_image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
}


.news_content {
    position: relative;
    padding: 100px;
    background: rgba(255, 255, 255, 0.35);
    width: 100%; 
    height: 100%; 
    
}

.news_title {
    font-size: 20px;
    margin-bottom: 20px;
}

.news_description {
    font-size: 15px;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .news_list {
        flex-direction: column;
        align-items: center;
    }

    .news_item {
        max-width: 100%;
    }
}
</style>

