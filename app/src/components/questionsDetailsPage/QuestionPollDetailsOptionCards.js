import React, { Component } from 'react'


class QuestionPollDetailsOptionCards extends Component {
    render() {
        const { totalVotes, option, authorUser } = this.props
        const percentOfVotes = (option.votes.length/totalVotes*100)
        const votedForThisQuestion = option.votes.filter(voter => voter === authorUser).length > 0

        return (
            <div className={`poll-detail ${votedForThisQuestion}`}>
                <div className="poll-detail-text"> {option.text} </div>
                <div className="progress-bar">
                    <div className="inner-progress-bar" style={{width: percentOfVotes + '%'}}>
                        <span>{percentOfVotes.toFixed(0)}%</span>
                    </div>
                </div>
                <div className="vote-details">{option.votes.length} out of {totalVotes} votes</div>

                { votedForThisQuestion  && <span>--- You Voted for option One ---</span> }
            </div>
        )
    }
}

export default QuestionPollDetailsOptionCards