import { combineReducers } from 'redux'
import authorUser from '../reducers/authorUser'
import users from '../reducers/users'
import questions from '../reducers/questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authorUser,
    users,
    questions,
    loadingBar: loadingBarReducer,
})