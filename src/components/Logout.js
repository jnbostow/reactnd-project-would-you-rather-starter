//Container Component
import React from 'react';
import { connect } from 'react-redux'
import {setAuthorUser} from "../actions/authorUser";


function Logout(props) {
    const { authorUser, users, dispatch } = props

    function handleLogOut(event) {

        dispatch(setAuthorUser(null))
    }

    return (
        <div className="user-login-nav">
            <div>Hello, <span className="username">{users[authorUser].name}</span></div>
            <img className="user-img-icon" src={users[authorUser].avatarURL} alt={users[authorUser].name} />
            <div className="logout" onClick={handleLogOut}>Logout</div>
        </div>
    )
}

function mapStateToProps ({ authorUser, users, dispatch }) {
    return {
        authorUser,
        users,
        dispatch
    }
}

export default connect(mapStateToProps)(Logout)