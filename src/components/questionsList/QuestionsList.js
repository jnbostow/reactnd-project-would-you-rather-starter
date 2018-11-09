//Container Component

import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortArrOfObjByProps from '../../helpers/sortArrOfObjByProps'
import QuestionCard from './QuestionCard'

class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unAnsweredQuestions: [],
            answeredQuestions: [],
            toggleQuestions: {
                showUnAnswered: true,
                showAnswered: false
            }
        };
        this.updateAuthorUserQuestions = this.updateAuthorUserQuestions.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateAuthorUserQuestions(questions, authorUser, users) {
        const allQuestionsIDs = Object.keys(questions)
        const answeredQuestionsIDs = Object.keys(users[authorUser].answers)

        const unAnsweredQuestionsIDs = allQuestionsIDs.filter(id =>
            !answeredQuestionsIDs.some(answerID => answerID === id)
        )

        function propSelector(obj) {
            return obj.timestamp
        }

        this.setState({
            unAnsweredQuestions: sortArrOfObjByProps(unAnsweredQuestionsIDs.map(id => questions[id]),
                                                    propSelector
            ),
            answeredQuestions: sortArrOfObjByProps(answeredQuestionsIDs.map(id => questions[id]),
                                                    propSelector
            )
        })
    }

    handleClick(e) {
        this.setState({
            toggleQuestions: {
                showUnAnswered: e.target.className === 'unanswered',
                showAnswered: e.target.className === 'answered',
            }
        });
    }

    componentWillMount() {
        const { authorUser, users, questions } = this.props

        this.updateAuthorUserQuestions(questions, authorUser, users)
    }



    render() {
        const { unAnsweredQuestions, answeredQuestions, toggleQuestions } = this.state
        const { users } = this.props

        return (
            <div className="question-list">
                <ul className='question-list-nav' onClick={this.handleClick}>
                    <li className="unanswered"
                        data-toggle-on={toggleQuestions.showUnAnswered}
                    >Unanswered Questions
                    </li>
                    <li className="answered"
                        data-toggle-on={toggleQuestions.showAnswered}
                    >Answered Questions
                    </li>
                </ul>
                <div className='unanswered-questions-list' data-show={toggleQuestions.showUnAnswered} >
                    { unAnsweredQuestions.map(question => (
                        <div key={question.id} className="question-card">
                            <QuestionCard question={question} users={users} />
                        </div>
                    ))}
                </div>
                <div className='answered-questions-list' data-show={toggleQuestions.showAnswered}>
                    { answeredQuestions.map(question => (
                        <div key={question.id} className="question-card">
                            <QuestionCard question={question} users={users} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ authorUser, users, questions }) {
    return {
        authorUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionsList)