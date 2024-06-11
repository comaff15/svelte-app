/** @type {import { ./$types }.LayoutServerLoad}*/

export const load = ({locals}) => {
    return {
        user: locals.user && {
            usernamame: locals.user.usernamame,
            email: locals.user.email,
            bio: locals.user.bio,
        }
    }
}