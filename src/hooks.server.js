/** @type {import('svelte/kit').Handle} */

export const handle = ({event, resolve}) => {
    const jwt = event.cookies.get('jwt');
    event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;

    return resolve(event);
}