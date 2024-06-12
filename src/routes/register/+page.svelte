<link rel="stylesheet" href="https://fontawesome.io/assets/font-awesome/css/font-awesome.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
<div class="container">
    <div class="clear-fix-container">
      
      <section id="register" class="info mt-5">
        <h3><i class="fas fa-user-astronaut"></i> Регистрация нового аккаунта</h3>
        <div class="row">
          <div class="col-lg-12">
            <div class="content-section">
              <p>Привет! Чтобы не возникали проблемы в будущем при игре на нашем игровом проекте, предлагаем прочитать <b>игровые правила.</b> В случае их нарушения, игрок будет заблокирован, а все ресурсы добыты им во время игрового процесса будут удалены или заблокированы в зависимости от нарушенного пункта правил. Мы являемся бесплатным сервером, и поэтому предоставляем игровой процесс "как есть". Если ты согласен, то мы можем продолжить регистрацию на проекте c;</p>
              <form action="" method="POST" class="register">
                <fieldset class="form-group mt-4">
                  <label for="login"><i class="fas fa-user"></i> Введите желаемый логин</label>
                  <input type="text" class="form-control form-control-lg" name="username" required placeholder="Введите ваш логин">
                  <small>Данный логин будет использоваться на наших игровых серверах. Его не возможно изменить после регистрации, поэтому выбирайте его с умом!</small>
                </fieldset>
                <fieldset class="form-group mt-4">
                  <label for="email"><i class="fas fa-envelope"></i> Введите желаемую почту</label>
                  <input type="email" class="form-control form-control-lg" name="email" required placeholder="Введите желаемую почту">
                  <small>Данная почта будет привязана к вашему аккаунту. Она позволит восстановить аккаунт в случае утери или взлома. Указывайте настоящую почту, ведь на нее придет письмо с проверкой!</small>
                </fieldset>
                <fieldset class="form-group mt-4">
                  <label for="password"><i class="fas fa-unlock-alt"></i> Введите пароль</label>
                  <input type="password" class="form-control form-control-lg" name="password" required placeholder="Введите желаемый пароль">
                  <small>Данный пароль будет использоваться для входа в аккаунт. Используйте пароль не менее 6 символов!</small>
                </fieldset>
                <fieldset class="form-group mt-4">
                  <label for="password2"><i class="fas fa-unlock-alt"></i> Повторите введеный пароль</label>
                  <input type="password" class="form-control form-control-lg" name="password2" required placeholder="Повторите введеный пароль">
                  <small>Повторите пароль, который вы писали выше. Это позволяет проверить, хорошо ли вы запомнили пароль от своего аккаунта или нет.</small>
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right mt-4"><i ></i> Зарегистрировать аккаунт на FunnyCraft</button>
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

p, small {
    color: #efefef !important;
}

small {
    font-size: 10px;
}

a {
    color: #FF9800;
    transition: 0.2s;
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
