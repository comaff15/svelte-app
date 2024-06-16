<script>
    import {page} from '$app/stores'
</script>
    <div class="container">
      <div class="clear-fix-container">

        <div class="row">
          <div class="col">
            <img src="./assets/img/logo.png" class="logoType" alt="hexworld logotype">
          </div>
          <div class="col d-flex justify-content-end align-items-center">
              <a class="btn btn-hex-gray mr-2 btn-lg start" href="/launcher"><i class="fas fa-play"></i> Скачать лаунчер</a>
            </div>
        </div>
          <nav class="navbar navbar-expand-lg navbar-dark navbar-hex">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav mr-auto">
                <ul class="navbar-nav">
                  <li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                    <a class="nav-link" class:active = { $page.url.pathname === '/'} href="/">
                      Главная
                    </a>
                  </li>
                  <li class="nav-item" aria-current={$page.url.pathname === '/news' ? 'page' : undefined}>
                    <a class="nav-link" class:active = {$page.url.pathname === '/news'} href = "/news">
                      Новости
                    </a>
                  </li>
                  {#if $page.data.user}
                    <li class="nav-item">
                      <a class="nav-link" href = "/profile/@{$page.user.username}">
                        {$page.user.username}
                      </a>
                    </li>
                  {:else}
                    <li class="nav-item" aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
                      <a class="nav-link" class:active = {$page.url.pathname === '/register'} href = "/register">
                          Регистрация
                      </a>
                    </li>
                    <li class="nav-item" aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
                      <a class="nav-link" class:active = {$page.url.pathname === '/login'} href = "/login">
                          Войти
                      </a>
                    </li>
                  {/if}
                </ul>
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

.navbar-nav > .nav-item{
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