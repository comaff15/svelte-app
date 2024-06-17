<script>
    import logo from '$lib/images/logo.svg';
</script>

<article class="fon">
  <div class="container">
    <div class="clear-fix-container">
        <footer class="down-footer">
            <div class="row">
              <div class="col-lg-4 col-md-4 logo-section">
                  <img src={logo} class="logoType" alt="hexworld logotype">
                <p>Все права защищены! Копирование данного сайта и проекта карается попаданием в <b>аниме-сериал</b>!!!!</p>
              </div>
              <div class="col-lg-8 col-md-8">
                  <div class="social"><h3>Разрабочкики:</h3>
                    <a href="https://vk.com/ded_mefedron" class="ico"> <i class="fab fa-vk"></i></a>
                    <a href="https://vk.com/xnor_xnor_xnor" class="ico"> <i class="fab fa-vk"></i></a>
                    <a href="https://vk.com/idestroyeverything" class="ico"> <i class="fab fa-vk"></i></a>
                    <a href="https://vk.com/73denis73" class="ico"> <i class="fab fa-vk"></i></a>
                    <a href="https://vk.com/ti_uje_tut" class="ico"> <i class="fab fa-vk"></i></a>
                    <!-- <a href="discord" class="ico"><i class="fab fa-discord"></i></a>
                    <a href="mailto:mail@mail.ru" class="ico"><i class="fas fa-at"></i></a>
                    <a href="mailto:mail@mail.ru" class="ico"><i class="fas fa-drafting-compass"></i></a> -->
                  </div>
              </div>
            </div>
        </footer>
  
      </div>
  </div>
</article>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

p {
    color: #efefef!important;
}

a {
    color: #FF9800;
    transition: 0.2s;
}

a:hover, a:focus {
    color: #c67600;
    text-decoration: none;
}

.fon {
    background: #171717 url('../../assets/img/bg-1.png') no-repeat center top;
}

.container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}

.clear-fix-container {
    margin-top: 3%;
}

footer.down-footer {
    display: block;
    margin-top: 10px;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 5px;
}

.logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.logo-section img.logoType {
    max-width: 100px; /* Уменьшаем максимальную ширину логотипа */
    width: 100%; /* Чтобы логотип адаптировался к разным размерам */
    padding-top: 6px;
    padding-bottom: 12px;
    
}

footer.down-footer > * > * > p {
    font-size: 13px;
    margin-top: 10px; 
    text-align: center; 
    
}

.social {
    display: flex;
    justify-content: flex-end;
    color: #efefef!important;
    
}

.ico {
    padding: 10px 17px;
    color: #c2c2c2;
    background: #232323;
    border-radius: 5px;
    font-size: 24px;
    margin-left: 10px;
    transition: 0.3s;
}

.ico:hover {
    background-color: #c2c2c2;
    color: #1c1c1c;
}
</style>