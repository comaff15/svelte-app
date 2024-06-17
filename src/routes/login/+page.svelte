<script>
  import {enhance} from '$app/forms';
  import ListError from '../../lib/components/common/ListError.svelte';

  /** @type {import('./$types').ActionData}*/
  export let form;
</script>

<div class="container">
    <div class="clear-fix-container">
      <section id="auth" class="auth mt-5">
        <h3><i class="fas fa-user-plus"></i><i> Вход в аккаунт</h3>
        <div class="row">
          <div class="col-lg-6 col-md-12 first">
            <div class="content-section">

              <ListError errors={form?.errors} />

              <form use:enhance method="POST">
                  <div class="form-group mt-4">
                  <label for="login"><i class="fas fa-user"></i> Введите логин</label>
                  <input 
                    name = 'login'
                    type = "text"
                    class = "form-control" 
                    required
                    placeholder = "Введите ваш логин"
                  >
                </div>
                <div class="form-group mt-4">
                    <label for="password"><i class="fas fa-unlock-alt"></i> Введите пароль</label>
                    <input
                      name = 'password'
                      type = "password"
                      required
                      class = "form-control" 
                      placeholder = "Введите ваш пароль"
                    >
                </div>
                <div class="form-group mt-5">
                    <button class="btn btn-hex-gray" type="submit"><i class="fas fa-align-justify"></i> Войти в аккаунт</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="d-flex flex-column align-items-center justify-content-center mt-5">
              <!-- <a class="btn btn-hex-gray w-75 mb-3 mt-3" href="#"><i class="fas fa-question"></i> Я забыл свой пароль, помогите</a> -->
              <a class="btn btn-hex-gray w-75" href="/register"><i class="fas fa-user-astronaut"></i> Я хочу зарегистрировать новый аккаунт</a>
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
}

a:hover, a:focus {
    color: #c67600;
    text-decoration: none;
}

.container {
    max-width: 100%;
    margin: 0 auto;
    max-width: 1170px;
}

.clear-fix-container {
    margin-top: 3%;
}

.btn-hex-gray {
    border-radius: 5px;
    color: #c2c2c2;
    border: 2px solid #c2c2c2;
}

.btn-hex-gray:hover {
    background-color: #c2c2c2;
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

.btn-primary {
    background-color: #FF9800;
    border: none;
    color: #fff;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #c67600;
}

.btn-lg {
    padding: 10px 20px;
    font-size: 18px;
}

.pull-xs-right {
    float: right;
}
</style>