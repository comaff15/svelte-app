<script>
  import logo from '$lib/images/logo.svg';
  import bg from '$lib/images/bg-1.png';
  import { page } from '$app/stores';
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:head>
  <title>Главная</title>
  <meta name="МаЙнКрАфТ" content="лучший сервер майнкрафт" />
</svelte:head>

<article class="fon">
  <div class="container" style="background-image: url({bg});">
    <div class="clear-fix-container">
      <div class="row">
        <div class="col">
          <img src={logo} class="logoType" alt="hexworld logotype" />
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <a class="btn btn-launcher mr-2 btn-lg start" href="/launcher"><i class="fas fa-play"></i> Скачать лаунчер</a>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-hex">
        <button class="navbar-toggler" type="button" aria-controls="navbarNavAltMarkup" aria-expanded={menuOpen} aria-label="Toggle navigation" on:click={toggleMenu}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class:collapse={!menuOpen} class="navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mr-auto">
            <ul class="navbar-nav">
              <li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Главная</a>
              </li>
              <li class="nav-item" aria-current={$page.url.pathname === '/news' ? 'page' : undefined}>
                <a class="nav-link" class:active={$page.url.pathname === '/news'} href="/news">Новости</a>
              </li>
              {#if $page.data.user}
                <li class="nav-item">
                  <a class="nav-link" href="/profile/@{$page.user.login}">{$page.user.login}</a>
                </li>
              {:else}
                <li class="nav-item" aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
                  <a class="nav-link" class:active={$page.url.pathname === '/register'} href="/register">Регистрация</a>
                </li>
                <li class="nav-item" aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
                  <a class="nav-link" class:active={$page.url.pathname === '/login'} href="/login">Войти</a>
                </li>
              {/if}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</article>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .fon {
    background: #171717 url({bg}) no-repeat center top;
    background-size: cover;
    width: 100%;
  }

  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 20px;
  }

  .clear-fix-container {
    margin-top: 3%;
  }

  .btn-launcher {
    background-color: #ff9800;
    border-color: #ff9800;
    color: white;
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    font-size: 20px;
    padding: 15px 25px;
    border-radius: 10px;
  }

  .btn-launcher:hover,
  .btn-launcher:focus {
    background-color: #f57c00;
    border-color: #f57c00;
    color: white;
  }

  img.logoType {
    width: 40%;
    max-width: 200px; /* Set a maximum width */
    padding-top: 25px;
    padding-bottom: 25px;
  }

  nav.navbar-hex {
    margin-top: 8%;
    background-color: #1c1c1c;
    padding: 0 !important;
    border: 2px solid #2a2a2a;
    border-radius: 5px;
    height: auto;
  }

  .navbar-toggler {
    border-color: #FF9800;
  }

  .navbar-toggler-icon {
    background-color: #FF9800;
  }

  .navbar-collapse {
    background-color: #1c1c1c;
    border-top: 2px solid #2a2a2a;
  }

  .navbar-nav > .nav-item {
    padding: 15px;
    margin-left: -2px;
    border-left: 2px solid #2e2e2e;
    border-right: 2px solid #2e2e2e;
  }

  .nav-link {
    color: #FF9800;
  }

  .nav-link.active {
    color: #c67600;
  }

  .nav-item[aria-current="page"] .nav-link {
    font-weight: bold;
    color: #f57c00;
  }

  @media (max-width: 768px) {
    .navbar-collapse {
      padding: 20px;
    }

    .nav-item {
      border: none;
      padding: 10px 0;
    }
  }
</style>
