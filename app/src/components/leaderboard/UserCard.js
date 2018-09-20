import React, { Component, Fragment } from 'react';
import QuestionCardTemplate from '../templates/QuestionCardTemplate'


class UserCard extends Component {

    render() {
        const {user, users} = this.props
        const numOfAnswers = Object.keys(users[user].answers).length,
              numOfQuestionsCreated = users[user].questions.length

        return (
            <QuestionCardTemplate author={user} componentText={
                <Fragment>
                    <div className="leaderboard-answered-score">Questions Answered: {numOfAnswers}</div>
                    <div className="leaderboard-created-score">Questions Created: {numOfQuestionsCreated}</div>
                    <div className="leaderboard-total-score">Total Score: {numOfAnswers + numOfQuestionsCreated}</div>
                </Fragment>
            } />
        )
    }
}

export default UserCard