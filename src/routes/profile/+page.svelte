<script>
    let playerName = 'PlayerName'; 
    let playerTag = '#1234'; 
    let userDescription = 'Пользователь еще не добавил информацию о себе'; 
    let registrationDate = '01 января 2022'; // Пример даты регистрации
</script>

<article class="profile">
    <section class="profile__content">
        <!-- Аватар пользователя -->
        <section class="profile__avatar">
            <img src="" alt="Аватар пользователя">
        </section>

        <section class="profile__info">
            <h1>{playerName}</h1>
            <h2>{playerTag}</h2>
            <p>Дата регистрации: {registrationDate}</p>
        </section>

        <!-- Описание пользователя -->
        <section class="profile__description">
            <h2>Информация о пользователе:</h2>
            <p>{userDescription}</p>
        </section>
        
        <!-- Кнопка настроек -->
        <section class="profile__settings">
            <button on:click={() => window.location.href='/settings'} class="nav-item nav-link">Настройки</button>  
        </section>
    </section>
</article>

<style>
    .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
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

    .profile__avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        align-self: center;
    }

    .profile__avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile__info {
        text-align: center;
    }

    .profile__info h1,
    .profile__info h2 {
        margin: 0;
    }

    .profile__description {
        text-align: center;
    }

    .profile__settings {
        text-align: center;
    }

    .settings-button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .settings-button:hover {
        background-color: #0056b3;
    }

    .profile__info p {
        margin: 5px 0;
    }
</style>
