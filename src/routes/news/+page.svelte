<script>
</script>

<svelte:head>
    <title>FunnyCraft-Новости</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="news">
    <section class="news_list">
                <a href="#link3" class="news_item">
            <section class="news_image" style="background-image: url('');"></section>
            <div class="news_content">
                <h2 class="news_title">Новость 1</h2>
                <p class="news_description">Описание первой новости. Это краткое описание содержания новости.</p>
            </div>
        </a>
            <a href="">Cмотреть</a>
        </section>
</article>

<style>

.news {
    padding-top: 20px; 
    margin-bottom: 20px;

    color: #fff; /* White text color */
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
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.4); /* White shadow */
    max-width: 320px;
    width: 100%;
    text-decoration: none; 
    color: inherit; 
    overflow: hidden; /* Ensures content doesn't overflow the container */
    background-color: #1c1c1c
}

.news_content {
    position: relative;
    padding: 50px;
    background: rgba(0, 0, 0, 0.85); 
    width: 100%; 
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
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

