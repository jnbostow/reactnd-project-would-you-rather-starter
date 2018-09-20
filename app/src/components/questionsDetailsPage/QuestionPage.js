
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import QuestionDetails from './QuestionDetails'
import QuestionPollDetails from './QuestionPollDetails'
import Error404 from '../Error404'

class QuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ''};
    }

    componentWillMount() {
        const id = this.props.match.params.id
        this.setState({id})
    }
    render() {
        const { questions, users, authorUser } = this.props
        const { id } = this.state

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
}

function mapStateToProps ({ questions, users, authorUser }) {
    return {
        questions,
        users,
        authorUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))