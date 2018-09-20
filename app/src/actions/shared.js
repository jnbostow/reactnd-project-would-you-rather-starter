import {
    _getUsers as getUsers, _getQuestions as getQuestions,
    _saveQuestionAnswer as saveAnswer,
    _saveQuestion as saveQuestion
} from '../utils/_DATA'
import { receiveUsers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, addQuestion } from '../actions/questions'
import { setAuthorUser } from '../actions/authorUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import {answerQuestion} from "./questions";
import {updateUserAnswers} from "./users";


export function handleInitialData () {
    return (dispatch) => {
        const AUTHOR_ID = null

        dispatch(showLoading())

        return Promise.all([
            getUsers(),
            getQuestions()
        ]).then(([users, questions]) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthorUser(AUTHOR_ID))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion (id,answer,authorUser) {
    return (dispatch) => {

        dispatch(showLoading())

        return saveAnswer({
            authedUser: authorUser,
            qid: id,
            answer: answer
        })
            .then(() => dispatch(answerQuestion(id,answer,authorUser)))
            .then(() => dispatch(updateUserAnswers(id, answer, authorUser)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAddQuestion (q1,q2,authorUser) {
    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestion({
            optionOneText: q1,
            optionTwoText: q2,
            author: authorUser
        })
            .then((question) => {
                dispatch(addQuestion(question))
                return question;
            })
            .then((question) =>
                dispatch(updateUserQuestions(question.id, question.author))
            )
            .then(()=> dispatch(hideLoading()))
    }
}