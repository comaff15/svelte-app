<script>
  import {enhance} from '$app/forms';
  import ListError from '../../lib/components/common/ListError.svelte';

  /** @type {import('./$types').ActionData}*/
  export let form;
</script>

<svelte:head>
    <title>Вход</title>
    <meta name="МаЙнКрАфТ" content="лучший сервер майнкрафт" />
</svelte:head>

<div class="container">
  <div class="clear-fix-container">
    <section id="auth" class="auth mt-5">
      <h3><i> Вход в аккаунт</i></h3>
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="content-section">

            <ListError errors={form?.errors} />

            <form use:enhance method="POST">
              <div class="form-group mt-4">
                <label for="login"><i class="fas fa-user"></i> Введите логин</label>
                <input
                  name="login"
                  type="text"
                  class="form-control"
                  required
                  placeholder="Введите ваш логин"
                >
              </div>
              <div class="form-group mt-4">
                <label for="password"><i class="fas fa-unlock-alt"></i> Введите пароль</label>
                <input
                  name="password"
                  type="password"
                  required
                  class="form-control"
                  placeholder="Введите ваш пароль"
                >
              </div>
              <div class="form-buttons mt-5">
                <button class="btn btn-hex-orange" type="submit">Войти в аккаунт</button>
                <a class="btn btn-hex-orange" href="/register"><i class="fas fa-user-astronaut"></i> Я хочу зарегистрировать новый аккаунт</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  
  </div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  a {
    color: #FF9800;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 1.5;
  }

  a:hover,
  a:focus {
    color: #c67600;
    text-decoration: none;
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    flex-direction: column;
    min-height: 80vh;
  }

  .clear-fix-container {
    margin-top: 3%;
  }

  .btn-hex-orange {
    border-radius: 5px;
    color: #FF9800;
    background-color: #1c1c1c;
    border: 2px solid #FF9800;
    transition: background-color 0.2s, color 0.2s;
    padding: 10px 20px;
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
  }

  .form-control:focus {
    color: #FF9800;
    background-color: #202020;
    border-color: #535353;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(87, 87, 87, 0.25);
  }

  .form-buttons {
    display: flex;
    justify-content: space-between;
  }

  .form-buttons .btn {
    flex: 0 0 48%;
  }
</style>