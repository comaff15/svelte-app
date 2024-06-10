<script> 
    //components
    import "../styles.css"
</script>

<svelte:head>
    <title>Главная</title>
    <meta name="МаЙнКрАфТ" content="лучший сервер майнкрафт" />
</svelte:head>

<article class = "about">

</article>

<article class = "news">

</article>

<article class = "download">

</article>

<style>
    .download, .news, .about{
        height: 100vh;
        max-width: 100vw;

        margin: 0;
    }
    .download{
        background-color: #f5f6fa;
    }
    .news{
        background-color: #fed330;
    }

    .about{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #f5f6fa;
    }
</style>    