//Container Component
import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserCard from '../leaderboard/UserCard'
import sortArrOfObjByProps from '../../helpers/sortArrOfObjByProps'


class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {userScoresSorted: []};

        this.leaderSort = this.leaderSort.bind(this);
    }

    componentDidMount() {
        const { users } = this.props
        this.leaderSort(users);
    }

    leaderSort(users) {
        const leaderScores = Object.keys(users).reduce((leaderScores, user)=> {
            const userScore = Object.keys(users[user].answers).length + users[user].questions.length

            return [...leaderScores, {[user]: userScore}]
        },[])

        const sortedLeaderScores = sortArrOfObjByProps(leaderScores, objSelectFirstValue)

        this.setState({userScoresSorted: sortedLeaderScores})

        function objSelectFirstValue(obj) {
            return Object.values(obj)[0]
        }

    }

    render() {
        const { users } = this.props
        const { userScoresSorted } = this.state

        return (
            <div className="leaderboard">
                {userScoresSorted.map(user => (
                    <div key={Object.keys(user)}>
                        <UserCard user={Object.keys(user)} users={users} />
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }) {
    return {
        users,
        questions
    }
}

export default connect(mapStateToProps)(Leaderboard)