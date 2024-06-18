<script>
    //import {enhance} from '$app/forms';
    //import {page} from '$app/stores';

    /** @type{import('./$types').PageData} */
    export let data;

    console.log(data)
</script>

<svelte:head>
    <title>{data.profile.login}</title>
</svelte:head>

<article class="profile">
    <section class="profile__content">
        <section class="profile__info">
            <h1>{data.profile.login}</h1>

            {#if data.profile.isOnline === false}
                <p>Оффлайн</p>
            {:else}
                <p>Онлайн</p>
            {/if}
        </section>

        
        <section class="profile__description">
            <h2>Информация о пользователе:</h2>
            {#if data.profile.status}
                <p>{data.profile.status}</p>
            {:else}
                <p>Профиль игрока еще нее заполнен</p>
            {/if}
        </section>
        <section class="profile__btns">
        {#if data.profile.login === data.user?.login}
            <section class="profile__settings">
                <a href="/settings" class="settings-button">Настройки</a>
            </section>
        {/if}
        {#if data.user.role === 'ROLE_ADMIN'}
            <section class="profile__settings">
                <a href="/admin" class="settings-button">Админка</a>
            </section>
        {/if}
        </section>
    </section>
</article>

<style>
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        height: 800px;
    }
    h2{
        font-size: 24px;
    }

    .profile__content {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        background-color: #f9f9f9;
    }


    .profile__info {
        text-align: center;
    }

    .profile__info h1,
    .profile__info p {
        margin: 0;
    }

    .profile__description {
        text-align: center;
    }

    .profile__settings {
        text-align: center;
        text-decoration: none;
    }

    .settings-button {
        padding: 10px 20px;
        margin: 10px;
        background-color: #FF9800;
        color: #1c1c1c;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        text-decoration: none;
    }

    .settings-button:hover {
        background-color: #c67600;
        text-decoration: none;
    }

    .profile__info p {
        margin: 5px 0;
    }
    .profile__btns{
        display: flex;
        justify-content: center;

    }
</style>
