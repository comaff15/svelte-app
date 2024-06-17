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
            <div class="col-md-5 offset-md-1 col-xs-12">
                <ListError errors={form?.errors}/>
                <h1 class="text-xs-center">Изменить пользователя</h1>
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
                            name="id"
                            type="text"
                            placeholder="Введите UUID изменяемого пользователя"
                        />
                    </fieldset>
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
                <hr/>
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
                            name="id"
                            type="text"
                            placeholder="UUID"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                        />
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">Обновить пароль</button>
            </form>
            <hr/>
            <form
                use:enhance={()=>{
                    return ({update}) => {
                        update({reset: false});
                    }
                }}
                method = "POST"
                action = "?/updateOnline"
            >
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        name="id"
                        type="text"
                        placeholder="UUID"
                    />
                </fieldset>
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        name="isOnline"
                        type="text"
                        placeholder="Статус (true/false)"
                    />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Обновить онлайн</button>
            </form>
        </div>
        <div class="col-md-5 col-xs-12">
            <h1 class="text-xs-center">Создать/Изменить пост</h1>
            <hr/>
            <form
                use:enhance={()=>{
                    return ({update}) => {
                        update({reset: false});
                    }
                }}
                method = "POST"
                action = "?/createPost"
            >
                <fieldset class="mb-3">
                    <label for="title" class="form-label">ID поста</label>
                    <input type="text" class="form-control" name='title' placeholder="Заголовок">
                </fieldset>
                <fieldset class="mb-3">
                    <label for="body" class="form-label">Тело поста в markdown</label>
                    <textarea class="form-control" name="body" rows="3"></textarea>
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Создать пост</button>
            </form>
            <hr/>
            <form
                use:enhance={()=>{
                    return ({update}) => {
                        update({reset: false});
                    }
                }}
                method = "POST"
                action = "?/updatePost"
            >
                <fieldset class="mb-3">
                    <label for="id" class="form-label">ID поста</label>
                    <input type="text" class="form-control" name='id' placeholder="Заголовок">
                </fieldset>
                <fieldset class="mb-3">
                    <label for="title" class="form-label">Заголовок</label>
                    <input type="text" class="form-control" name='title' placeholder="Заголовок">
                </fieldset>
                <fieldset class="mb-3">
                    <label for="body" class="form-label">Тело поста в markdown</label>
                    <textarea class="form-control" name="body" rows="3"></textarea>
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Создать пост</button>
            </form>
            <hr/>
            <form
                use:enhance={()=>{
                    return ({update}) => {
                        update({reset: false});
                    }
                }}
                method = "POST"
                action = "?/deletePost"
            >
                <fieldset class="form-group">
                    <input
                        class="form-control form-control-lg"
                        name="id"
                        type="text"
                        placeholder="ID удаляемого поста"
                    />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Удалить</button>
            </form>
        </div>
    </div>
</section>