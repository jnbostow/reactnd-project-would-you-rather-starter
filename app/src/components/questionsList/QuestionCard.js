
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionCardTemplate from '../templates/QuestionCardTemplate'


class QuestionCard extends Component {
    render() {
        const { question } = this.props
        const { id, author } = question, text = question.optionOne.text

        return (
            <Link to={`/question/${id}`}>

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
}



export default QuestionCard