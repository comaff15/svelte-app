<script>
    import Linux from "../../lib/components/pages/launcher/Linux.svelte";
    import Win from "../../lib/components/pages/launcher/Win.svelte";
    import Preloading from "../Preloading.svelte";

    const options = [
        {os: 'windows', component: Win},
        {os: 'Linux', component: Linux}
    ]

    let selected = options[0]
</script>
<article>
    <h1>Здеся блок про выбор ос</h1>
    <!-- Селект тоже надо стилезовать -->
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>
                {
                    option.os
                }
            </option>
        {/each}
    </select>
</article>
<svelte:component this={selected.component}/>


<style>

</style>