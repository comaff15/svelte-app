<script>
    import {enhance} from "$app/forms";
    import ListError from "../../lib/components/common/ListError.svelte";

    /** @type {import('./$types').ActionData}*/
    export let form;
</script>

<div class="container">
    <div class="clear-fix-container">
      
      <section id="register" class="info mt-5">
        <h3><i class="fas fa-user-astronaut"></i> Регистрация нового аккаунта</h3>
        <div class="row">
          <div class="col-lg-12">
            <div class="content-section">
            <p>Привет!Мы являемся бесплатным сервером, и поэтому предоставляем игровой процесс "как есть". Если ты согласен, то мы можем продолжить регистрацию на проекте:</p>
            
            <ListError errors={form?.errors}/>

            <form use:enhance method="POST" class="register">
                <fieldset class="form-group">
                    <label for="login"><i class="fas fa-user"></i> Введите желаемый логин</label>
                    <input 
                        type="text" 
                        class="form-control"
                        placeholder="Введите ваш логин"
                        required
                        name="login"
                    >
                    <small>Данный логин будет использоваться на наших игровых серверах. Его не возможно изменить после регистрации, поэтому выбирайте его с умом!</small>
                </fieldset>
                <fieldset class="form-group mt-4">
                    <label for="password"><i class="fas fa-unlock-alt"></i> Введите пароль</label>
                    <input 
                        type="password"
                        name="password"
                        class="form-control" 
                        required
                        placeholder="Введите желаемый пароль"
                    >
                    <small>Данный пароль будет использоваться для входа в аккаунт. Используйте пароль не менее 6 символов!</small>
                </fieldset>
                <div class="form-group mt-5">
                    <button class="btn btn-hex-gray" type="submit"><i class="fas fa-align-justify"></i> Зарегистрироваться</button>
                </div>
            </form>
            <div class="col-lg-6 col-md-12">
                <div class="d-flex flex-column align-items-center justify-content-center mt-5">
                  <a class="btn btn-hex-gray w-75" href="/login"><i class="fas fa-user-astronaut"></i> Уже есть аккаунт?</a>
                </div>
              </div>
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

p, small {
    color: #efefef !important;
}

small {
    font-size: 10px;
}

button {
    color: #FF9800;
    transition: 0.2s;
}

button:hover, button:focus {
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

section.auth, section.info {
    display: block;
    color: #efefef;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
}

section.info > h3 {
    color: #fff;
    font-size: 23px;
    text-transform: initial;
    margin-bottom: 20px;
}

form.register {
    margin-top: 25px;
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
