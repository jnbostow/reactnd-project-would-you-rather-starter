
import React, { Component, Fragment } from 'react'
import QuestionCardTemplate from '../templates/QuestionCardTemplate'
import QuestionPollDetailsOptionCards from "./QuestionPollDetailsOptionCards";


class QuestionPollDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.updateVoteState = this.updateVoteState.bind(this);

    }

    updateVoteState() {
        const { question } = this.props

        this.setState({
            totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
            optOne: question.optionOne,
            optTwo: question.optionTwo
        })
    }

    componentWillMount() {
        this.updateVoteState();
    }

    render() {
        const { totalVotes, optOne, optTwo } = this.state
        const { question, authorUser } = this.props
        const { author } = question

        return (
            <QuestionCardTemplate author={author} componentText={
                <Fragment>

                    < QuestionPollDetailsOptionCards totalVotes={totalVotes}
                    option={optOne}
                    authorUser={authorUser}
                    />
                    <QuestionPollDetailsOptionCards totalVotes={totalVotes}
                    option={optTwo}
                    authorUser={authorUser}
                    />
                </Fragment>
            } />

        )
    }
}

export default QuestionPollDetails