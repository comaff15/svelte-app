<script>
    import {enchance} from '$app/forms';

    import ListError from '../../lib/components/common/ListError.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Настройки</title>
</svelte:head>

add logic