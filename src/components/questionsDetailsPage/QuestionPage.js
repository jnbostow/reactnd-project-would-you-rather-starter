
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'
import QuestionPollDetails from './QuestionPollDetails'
import Error404 from '../Error404'

function QuestionPage(props) {

    const id = props.match.params.question_id
    const { questions, users, authorUser } = props

    return (
            questions[id] === undefined ?
                <Error404 />
                :
                <Fragment>
                    {
                        users[authorUser].answers[id] !== undefined ?
                            <QuestionPollDetails question={questions[id]}
                                                 users={users}
                                                 authorUser={authorUser}/>
                            :
                            <QuestionDetails id={id}
                                             question={questions[id]}
                                             users={users}
                                             authorUser={authorUser}/>
                    }
                </Fragment>
        )
}

function mapStateToProps ({ questions, users, authorUser }) {
    return {
        questions,
        users,
        authorUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))