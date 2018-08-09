import React from 'react';
import { connect } from 'react-redux';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';
import { validateUserInput } from '../actions/questions';

export class Quiz extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        // grabs the value of the input element after you submit the form
        const userInput = event.target.answer.value;
        this.props.dispatch(validateUserInput(userInput));
    }

    render() {
        return (
            <div>
                <form
                    className={`${inputStyles.formInput} ${formStyles.emojiForm}`}
                    onSubmit={event => this.onSubmit(event)}
                >
                    <label htmlFor="description">Your Answer:</label>
                    <input id="description" type="text" name="answer" />
                    <button className={buttonStyles.formButton}>Submit</button>
                </form>
                <p className={`${inputStyles.formInput}`}>{this.props.feedback}</p>
            </div>
        );
    }
}

const mapStatToProps = state => {
    return {
        feedback: state.question.feedback
    };
};

export default connect(mapStatToProps)(Quiz);
