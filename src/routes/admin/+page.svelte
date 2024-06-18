<script>
    import { enhance } from '$app/forms';
    import ListError from '../../lib/components/common/ListError.svelte';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Настройки профиля</title>
</svelte:head>

<section class="settings-page">
    <div class="container page">
        <div class="row clear-fix-container justify-content-center">
            <div class="col-md-5 col-xs-12">
                <ListError errors={form?.errors}/>
                <section class="auth">
                    <h1 class="text-center">Изменить пользователя</h1>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/updateStatus"
                    >
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="id"
                                type="text"
                                placeholder="Введите UUID изменяемого пользователя"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="status"
                                type="text"
                                placeholder="Статус"
                            />
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Обновить статус</button>
                    </form>
                    <hr/>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/updatePassword"
                    >
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="id"
                                type="text"
                                placeholder="UUID"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="password"
                                type="password"
                                placeholder="Пароль"
                            />
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Обновить пароль</button>
                    </form>
                    <hr/>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/updateOnline"
                    >
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="id"
                                type="text"
                                placeholder="UUID"
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="isOnline"
                                type="text"
                                placeholder="Статус (true/false)"
                            />
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Обновить онлайн</button>
                    </form>
                </section>
            </div>
            <div class="col-md-5 col-xs-12">
                <section class="auth">
                    <h1 class="text-center">Создать/Изменить пост</h1>
                    <hr/>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/createPost"
                    >
                        <fieldset class="form-group">
                            <label for="title" class="form-label">ID поста</label>
                            <input type="text" class="form-control" name="title" placeholder="Заголовок">
                        </fieldset>
                        <fieldset class="form-group">
                            <label for="body" class="form-label">Тело поста в markdown</label>
                            <textarea class="form-control" name="body" rows="3"></textarea>
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Создать пост</button>
                    </form>
                    <hr/>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/updatePost"
                    >
                        <fieldset class="form-group">
                            <label for="id" class="form-label">ID поста</label>
                            <input type="text" class="form-control" name="id" placeholder="ID">
                        </fieldset>
                        <fieldset class="form-group">
                            <label for="title" class="form-label">Заголовок</label>
                            <input type="text" class="form-control" name="title" placeholder="Заголовок">
                        </fieldset>
                        <fieldset class="form-group">
                            <label for="body" class="form-label">Тело поста в markdown</label>
                            <textarea class="form-control" name="body" rows="3"></textarea>
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Обновить пост</button>
                    </form>
                    <hr/>
                    <form
                        use:enhance={() => ({ update }) => update({ reset: false })}
                        method="POST"
                        action="?/deletePost"
                    >
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                name="id"
                                type="text"
                                placeholder="ID удаляемого поста"
                            />
                        </fieldset>
                        <button class="btn btn-hex-orange btn-block">Удалить</button>
                    </form>
                </section>
            </div>
        </div>
    </div>
</section>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .container {
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
  }

  .clear-fix-container {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .btn-hex-orange {
    border-radius: 5px;
    color: #FF9800;
    background-color: #1c1c1c;
    border: 2px solid #FF9800;
    transition: background-color 0.2s, color 0.2s;
    padding: 10px 20px;
    width: 100%;
  }

  .btn-hex-orange:hover {
    background-color: #FF9800;
    color: #1c1c1c;
  }

  section.auth {
    display: block;
    color: #efefef;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
  }

  .form-control {
    color: #FF9800;
    background-color: #202020;
    border: 1px solid #3a3a3a;
    margin-bottom: 1rem;
    padding: 10px;
    font-size: 1rem; /* Увеличен размер шрифта */
    padding-top: 10px;
  }

  .form-control::placeholder {
    color: #797575; 
    opacity: 1; 
  }

  .form-control:focus {
    color: #FF9800;
    background-color: #202020;
    border-color: #535353;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(87, 87, 87, 0.25);
  }
  form {
    padding-top: 10px;
  }

  .text-center {
    text-align: center;
  }

  hr {
    border: 1px solid #3a3a3a;
  }

  .form-label {
    color: #efefef;
    margin-bottom: 0.5rem;
  }

  .btn-block {
    display: block;
    width: 100%;
  }
</style>