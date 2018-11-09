import React from 'react'
import { connect } from 'react-redux'


function QuestionCardTemplate(props)  {

    const {author, users, componentText} = props

    return (
        <div className="question-card">
            <div className="question-card-author">{ users[author].name } asks:</div>

            <div className="question-card-details">
                <div className="avatar-image">
                    <img  src={users[author].avatarURL} alt={users[author].name} />
                </div>
                <div className="question-card-text">
                    {componentText}
                </div>

            </div>
        </div>
    )
}

function mapStateToProps ({ users, authorUser }) {
    return {
        users,
        authorUser
    }
}

export default connect(mapStateToProps)(QuestionCardTemplate)