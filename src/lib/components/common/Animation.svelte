<script>
    import animation from '$lib/images/animation-bg.png'
    import { onMount } from 'svelte';

    let imageWidth = 6200; // Ширина изображения
    let slideWidth = 400; // Ширина слайда
    let currentSlide = 0;

    function moveSlide() {
        currentSlide++;

        if (currentSlide * slideWidth > imageWidth) {
            currentSlide = 0;
        }

        const slider = document.querySelector('.slider img');
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    onMount(() => {
        setInterval(moveSlide, 2000); // Время между переходами
    });

</script>

<section class="bg-imgs">
    <section class="slider animation">
        <img src={animation} alt="Описание изображения">
    </section>
</section>



<style>
    .slider{
        width: 400px;
        height: 500px;
        overflow: hidden;
    }
    .bg-imgs{
        background: url(/bg.jpg);
    }
</style>