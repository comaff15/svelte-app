/** @type {import { ./$types }.LayoutServerLoad}*/

export const load = ({locals}) => {
    return {
        user: locals.user && {
            usernamame: locals.user.usernamame,
            password: locals.user.password,
        }
    }
}