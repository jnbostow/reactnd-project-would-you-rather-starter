//Container Component
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setAuthorUser} from "../actions/authorUser";
import loginImage from '../images/doubt-black.jpg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const { dispatch } = this.props
        const value = this.state.value

        event.preventDefault()

        if(value !== '' || value !== null) {
            dispatch(setAuthorUser(value))
        }
    }

    render() {
        const { authorUser, users } = this.props
        return (
            authorUser === null &&
            <div className="login">
                <div className="app-title">
                    <img src={loginImage} alt="man holding sign with question mark" />
                    <div className="app-title-text">
                        <div className="app-title-sm-text pink-text">Welcome to</div>
                        <h2>WOULD YOU RATHER?</h2>
                        <div className="pink underscore"></div>
                    </div>
                </div>
                <div className="login-notice-text">To continue, please</div>
                <div className="form-title">Sign In</div>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value={''}>--select a username--</option>
                        {Object.keys(users).map(userID => (
                            <option key={userID} value={userID}>
                                {users[userID].name}
                            </option>
                        ))}
                    </select>
                    <input type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}


function mapStateToProps ({ authorUser, users }) {
    return {
        authorUser,
        users
    }
}

export default connect(mapStateToProps)(Login)