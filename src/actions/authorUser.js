export const SET_AUTHOR_USER = 'SET_AUTHOR_USER'

export function setAuthorUser (id) {
    return {
        type: SET_AUTHOR_USER,
        id,
    }
}
