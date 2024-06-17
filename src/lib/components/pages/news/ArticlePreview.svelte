<script>
    export let article;
</script>


<div class="article-preview">
    <div class="row mb-5 mt-5">
        <div class="col-lg-6 col-md-12">
            <div class="vk-post">
                <div class="post-header">{article.title}</div>
                <p>{article.body}</p>
                <span class="opt-post">
                    <a class="read-more-btn" href='news/{ article.articleId }'>Читать подробнее</a>
                </span>
            </div>
        </div>
    </div>
</div>

<style>
    p {
        color: #efefef !important;
        overflow: hidden;
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
        color: #ffffff;
    }

    /* .vk-post > .opt-post > ul {
        margin-top: 35px;
    }

    .vk-post > .opt-post > ul > li {
        display: inline;
        font-size: 18px;
        margin: 0px 5px;
    } */

    .vk-post > .opt-post > a {
        padding: 5px 10px;
        border: 2px solid #ffffff;
        border-radius: 10px;
        margin: -6px 10px;
        float: right;
        transition: 0.4s;
    }

    .vk-post > .opt-post > a:hover {
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

</style>