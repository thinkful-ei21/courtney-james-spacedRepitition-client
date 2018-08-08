import React from 'react';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';

export default class Quiz extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        // grabs the value of the input element after you submit the form
        const userAnswer = event.target.answer.value;
        console.log(userAnswer);
    }

    render() {
        return (
            <form
                className={`${inputStyles.formInput} ${formStyles.emojiForm}`}
                onSubmit={event => this.onSubmit(event)}
            >
                <label htmlFor="description">Your Answer:</label>
                <input id="description" type="text" name="answer" />
                <button className={buttonStyles.formButton}>Submit</button>
            </form>
        );
    }
}
