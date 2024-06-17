/** @type {import { ./$types }.LayoutServerLoad}*/

export const load = ({locals}) => {
    return {
        user: locals.user && {
            id: locals.user.id,
            login: locals.user.sub,
            role: locals.user.role
        }
    }
}