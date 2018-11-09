//Container Component
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { withRouter } from 'react-router-dom'


class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {q1: '', q2: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()

        const { dispatch, authorUser } = this.props
        const { q1, q2 } = this.state

        dispatch(handleAddQuestion(q1, q2, authorUser))

    }

    componentWillUnmount() {
        const { history } = this.props
        history.push('/')
    }


    render() {
        const { q1,q2 } = this.state
        const isEnabled = q1.length > 0 && q2.length > 0

        return (
            <div className="new-question-form">
                <h2>Create New Question</h2>

                <div>Would you Rather...</div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter question one text here'
                           name='q1' value={q1} onChange={this.handleChange} />

                    <div>OR</div>

                    <input type='text' placeholder='enter question two text here'
                           name='q2' value={q2} onChange={this.handleChange} />

                    <input type="submit" value="submit" disabled={!isEnabled}/>
                </form>
            </div>
        )
    }
}


function mapStateToProps ({ authorUser}) {
    return {
        authorUser
    }
}

export default withRouter(connect(mapStateToProps)(AddForm))