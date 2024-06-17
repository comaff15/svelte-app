/** @type {import { ./$types }.LayoutServerLoad}*/

export const load = ({locals}) => {
    return {
        user: locals.user && {
            login: locals.user.login,
            password: locals.user.password,
            role: locals.user.role
        }
    }
}