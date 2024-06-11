<script>
    export let errors;
</script>

{#if errors}
    <ul class = "error">
        {#each Object.keys(errors) as key}
            <li>{key} {errors[key]}</li>
        {/each}
    </ul>
{/if}