//Container Component
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setAuthorUser} from "../actions/authorUser";


class Logout extends Component {
    render() {
        const { authorUser, users, dispatch } = this.props

        function handleLogOut(event) {

            dispatch(setAuthorUser(null))
        }

        return (
            <div className="user-login-nav">
                <div>Hello, {users[authorUser].name}</div>
                <img className="user-img-icon" src={users[authorUser].avatarURL} alt={users[authorUser].name} />
                <div className="logout" onClick={handleLogOut}>Logout</div>
            </div>
        )
    }
}

function mapStateToProps ({ authorUser, users, dispatch }) {
    return {
        authorUser,
        users,
        dispatch
    }
}

export default connect(mapStateToProps)(Logout)