<script>
    import {enhance} from '$app/forms';

    import ListError from '../../lib/components/common/ListError.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<svelte:head>
    <title>Настройки профиля</title>
</svelte:head>

<section class="settings-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Твои настройки</h1>

                <ListError errors={form?.errors}/>

                <form
                    use:enhance={()=>{
                        return ({update}) => {
                            update({reset: false});
                        }
                    }}
                    method = "POST"
                    action = "?/save"
                >
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            name="login"
                            type="text"
                            placeholder="Логин"
                            value={data.user.login}
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            name="status"
                            type="text"
                            placeholder="Статус"
                            value={data.user.status}
                            />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            name="password"
                            type="password"
                            placeholder="Логин"
                        />
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">Обновить настройки</button>
                </form>
                <hr/>

                <form use:enhance method="POST" action="?/logout">
                    <button class="btn btn-outline-danger">Или нажмите сюда для выхода</button>
                </form>
            </div>
        </div>
    </div>
</section>