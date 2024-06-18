<script>
    import {enhance} from '$app/forms';

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
            <div class="col-md-6 col-xs-12">
                <h1 class="text-center">Твои настройки</h1>

                <ListError errors={form?.errors}/>

                <form
                    use:enhance={()=>{
                        return ({update}) => {
                            update({reset: false});
                        }
                    }}
                    method="POST"
                    action="?/updateStatus"
                >
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

                <form
                    use:enhance={()=>{
                        return ({update}) => {
                            update({reset: false});
                        }
                    }}
                    method="POST"
                    action="?/updatePassword"
                >
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

                <form use:enhance method="POST" action="?/logout">
                    <button class="btn btn-outline-danger btn-block">Нажмите сюда для выхода</button>
                </form>
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

  .text-center{
    color: #ffffff;
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

  .form-control {
    color: #FF9800;
    background-color: #202020;
    border: 1px solid #3a3a3a;
    margin-bottom: 1rem;
    padding: 10px;
    font-size: 1rem;
  }

  .form-control::placeholder {
    color: #ffffff;
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


  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-outline-danger {
    border-radius: 5px;
    color: #dc3545;
    background-color: transparent;
    border: 2px solid #dc3545;
    transition: background-color 0.2s, color 0.2s;
    padding: 10px 20px;
    width: 100%;
  }

  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: #ffffff;
  }
</style>