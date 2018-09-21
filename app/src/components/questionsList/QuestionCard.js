
import React from 'react'
import { Link } from 'react-router-dom'
import QuestionCardTemplate from '../templates/QuestionCardTemplate'


function QuestionCard(props) {
    const { question } = props
    const { id, author } = question, text = question.optionOne.text

    return (
        <Link to={`/questions/${id}`}>

            <QuestionCardTemplate author={author} componentText={
                <div className="question-card-text">
                    <p className="question-card-text-header">Would You Rather?</p>
                    <p>{ text }</p>
                    <button type="button">View Poll</button>
                </div>
            }/>
        </Link>
    )
}



export default QuestionCard