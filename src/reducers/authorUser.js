import { SET_AUTHOR_USER } from '../actions/authorUser'

export default function authorUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHOR_USER :
            return action.id
        default :
            return state
    }
}