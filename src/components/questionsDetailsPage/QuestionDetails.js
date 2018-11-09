
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../../actions/shared'
import QuestionCardTemplate from '../templates/QuestionCardTemplate'

class QuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedOption: 'optionOne'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({selectedOption: event.target.value});
    }

    handleSubmit(event) {
        const { dispatch, id,authorUser } = this.props
        const selectedOption = this.state.selectedOption

        event.preventDefault()
        dispatch(handleAnswerQuestion(id, selectedOption, authorUser))
    }

    render() {
        const { question } = this.props
        const { author } = question


        return (
            <div className='question-list question-details-page'>

                <QuestionCardTemplate author={author} componentText={
                    <Fragment>
                        <p className="question-card-text-header">Would You Rather?</p>

                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input defaultChecked type="radio" name="selectedOption" value="optionOne" onChange={this.handleChange} />
                                {question.optionOne.text}
                            </label>

                            <label>
                                <input type="radio" name="selectedOption" value="optionTwo" onChange={this.handleChange} />
                                {question.optionTwo.text}
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </Fragment>
                }/>
            </div>
        )
    }
}

export default connect()(QuestionDetails)