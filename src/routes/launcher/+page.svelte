<script>
    import Linux from "../../lib/components/pages/launcher/Linux.svelte";
    import Win from "../../lib/components/pages/launcher/Win.svelte";

    const options = [
        {os: 'Windows', component: Win},
        {os: 'Linux', component: Linux}
    ]

    let selected = options[0];

function download() {
    alert(`Downloading installer for ${selected.os}`);
}
</script>

<div class="container">
<article class="os-selection">
    <h1>Выбор операционной системы</h1>
    <select bind:value={selected} class="styled-select">
        {#each options as option}
            <option value={option}>
                {option.os}
            </option>
        {/each}
    </select>
    <button class="download-btn" on:click={download}>Скачать</button>
</article>

<article class="installation-instructions">
    <h1>Инструкция по установке</h1>
    <ol>
        <li>Скачайте установочный файл, нажав на кнопку "Скачать".</li>
        <li>Откройте скачанный файл и следуйте инструкциям установщика.</li>
        <li>Запустите игру через ярлык на рабочем столе.</li>
        <li>Присоединяйтесь к нашему серверу и наслаждайтесь игрой!</li>
    </ol>
</article>
</div>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.os-selection, .installation-instructions {
    flex: 1;
    margin: 0 20px;
}

h1 {
    margin-bottom: 20px;
    color: #fff;
}

.styled-select {
    background-color: #1c1c1c;
    color: #fff;
    padding: 10px 20px;
    border: 2px solid #FF9800;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}

.styled-select:hover, .styled-select:focus {
    background-color: #c67600;
    color: #fff;
    border-color: #c67600;
}

.download-btn {
    background-color: #FF9800;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.download-btn:hover, .download-btn:focus {
    background-color: #c67600;
    color: #fff;
}

ol {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
    color: #fff;
}
</style>