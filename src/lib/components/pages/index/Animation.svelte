<script>
</script>

<section class="bg-imgs">
    <section class="animation">
    </section>
</section>

<style>
    .animation {
        width: 600px;
        height: 700px;
        background: url(https://drive.google.com/file/d/1qlK-gP2S4uX6uQWj4RMs7RcDu_7IDZ6H/view?usp=sharing);
            background-position: 0;
            background-repeat: no-repeat;
            animation: objects 10s steps(16);
        animation-delay: 5s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
    }

    @keyframes objects {
        0% {
            background-position: 0px;
        }
            
            100% {
            background-position: -8700px;
        }
    }
</style>