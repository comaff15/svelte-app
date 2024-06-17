import { jwtDecode } from 'jwt-decode';

/** @type {import('svelte/kit').Handle} */

export const handle = ({event, resolve}) => {
    const jwt = event.cookies.get('jwt');
    event.locals.user = jwt ? jwtDecode(jwt) : null;

    return resolve(event);
}