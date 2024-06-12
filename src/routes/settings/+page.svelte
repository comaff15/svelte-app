<script>
    import {enchance} from '$app/forms';

    import ListError from '../../lib/components/common/ListError.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;

    import NewsImage2 from '$lib/images/header.jpg';
    
    let playerName = 'PlayerName'; 
    let userDescription = ''; 
    let newPassword = '';
    let confirmPassword = '';
    let avatarImage = NewsImage2;

    function handleSaveAvatar() {
        console.log('Аватар сохранен');
    }

    function handleSaveNickname() {
        console.log('Никнейм сохранен:', playerName);
    }

    function handleSaveDescription() {
        console.log('Описание сохранено:', userDescription);
    }

    function handleSavePassword() {
        if (newPassword === confirmPassword) {
            console.log('Пароль сохранен');
        } else {
            console.error('Пароли не совпадают');
        }
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                avatarImage = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }



</script>

<svelte:head>
    <title>Настройки</title>
</svelte:head>


<article class="settings">
    <section class="settings__content">
        <!-- Аватар пользователя -->
        <section class="profile__avatar">
            <img src="{avatarImage}" alt="Аватар пользователя">
            <input type="file" accept="image/*" on:change={handleChangeAvatar}>
            <button on:click={handleSaveAvatar} class="save-button">Сохранить аватар</button>
        </section>

        <section class="settings__info">
            <label>
                Никнейм:
                <input type="text" bind:value={playerName}>
            </label>
            <button on:click={handleSaveNickname} class="save-button">Сохранить никнейм</button>

            <label>
                О себе:
                <textarea bind:value={userDescription} placeholder="Добавьте информацию о себе"></textarea>
            </label>
            <button on:click={handleSaveDescription} class="save-button">Сохранить описание</button>
        </section>

        <!-- Изменение пароля -->
        <section class="settings__password">
            <label>
                Новый пароль:
                <input type="password" bind:value={newPassword} placeholder="Введите новый пароль">
            </label>
            <label>
                Повторите пароль:
                <input type="password" bind:value={confirmPassword} placeholder="Повторите новый пароль">
            <button on:click={handleSavePassword} class="save-button">Сохранить пароль</button>
        </section>
    </section>
</article>

<style>
    .settings {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .settings__content {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        background-color: #f9f9f9;
    }

    .profile__avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .profile__avatar img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 3px solid #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .profile__avatar input[type="file"] {
        margin-top: 10px;
    }

    .settings__info label,
    .settings__password label {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .settings__info input,
    .settings__info textarea,
    .settings__password input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .save-button {
        padding: 10px 25px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }

    .save-button:hover {
        background-color: #0056b3;
    }

</style>