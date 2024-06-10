<script> 
    //components
    import Animation from "../lib/components/pages/index/Animation.svelte";
    import "../styles.css"
</script>
    <article class = "about">

    </article>

    <article class = "news">
        {#each posts as post}
            
        {/each}
    </article>

    <article class = "download">
        <section class = "description">
        </section>
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