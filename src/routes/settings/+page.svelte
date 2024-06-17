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
                    action = "?/updateStatus"
                >
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            name="status"
                            type="text"
                            placeholder="Статус"
                            />
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">Обновить статус</button>
                </form>
                <form
                use:enhance={()=>{
                    return ({update}) => {
                        update({reset: false});
                    }
                }}
                method = "POST"
                action = "?/updatePassword"
            >
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        name="password"
                        type="password"
                        placeholder="Логин"
                    />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Обновить пароль</button>
            </form>
            <hr/>
                <hr/>

                <form use:enhance method="POST" action="?/logout">
                    <button class="btn btn-outline-danger">Или нажмите сюда для выхода</button>
                </form>
            </div>
        </div>
    </div>
</section>