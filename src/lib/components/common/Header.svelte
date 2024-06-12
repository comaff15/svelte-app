<script>
    import {page} from '$app/stores'
</script>
<head>
    <!-- meta tags -->
    <meta charset="utf-8">
    <title>FunnyCraft - ИГРОВОЙ СЕРВЕР MINECRAFT</title>
  </head>

  <div class="container">
    <div class="clear-fix-container">
      <div class="row">
        <div class="col">
          <img src="./assets/img/logo.png" class="logoType" alt="hexworld logotype">
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <a class="btn btn-launcher btn-lg start" href=""><i class="fas fa-play"></i> Скачать лаунчер</a>
        </div>
      </div>
  
      <nav class="navbar navbar-expand-lg navbar-dark navbar-hex">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav w-100 d-flex justify-content-between">
            <button on:click={() => window.location.href='/'} class="nav-item nav-link">Главная</button>
            <button on:click={() => window.location.href='/news'} class="nav-item nav-link">Новости</button>
            <button on:click={() => window.location.href='/profile'} class="nav-item nav-link">Профиль</button>
            <button on:click={() => window.location.href='/register'} class="nav-item nav-link">Регистрация</button>
            <button on:click={() => window.location.href='/login'} class="nav-item nav-link">Войти</button>
          </div>
        </div>
      </nav>
    </div>
  </div>

<style>
    * {
    padding: 0;
    margin: 0;
}
button {
    color: #fa9600;
    transition: 0.2s;
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
    width: 1200px; 
    margin: 0 auto; 
    padding: 20px; 
}

.clear-fix-container {
    margin-top: 3%;
}

.btn-launcher {
    background-color: #FF9800;
    border-color: #FF9800;
    color: white;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    font-size: 20px; /* увеличение размера текста */
    padding: 15px 25px; /* увеличение внутренних отступов */
    border-radius: 10px; /* увеличение радиуса границы */
  }

.btn-launcher:hover, .btn-launcher:focus {
    background-color: #f57c00;
    border-color: #f57c00;
    color: white;
  }
  
img.logoType {
    width: 50%;
    padding-top: 25px;
    padding-bottom: 25px;
}

nav.navbar-hex {
    margin-top: 8%;
    background-color: #1c1c1c;
    padding: 0!important;
    border: 2px solid #2a2a2a;
    border-radius: 5px;
    height: 60px;
}

.navbar-nav > .nav-item.nav-link {
    padding: 15px;
    margin-left: -2px;
    border-left: 2px solid #2e2e2e;
    border-right: 2px solid #2e2e2e;
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

.btn-hex-gray.start {
    line-height: 47px;
    font-size: 24px;
    width: 50%;
    height: 85%;
}
</style>