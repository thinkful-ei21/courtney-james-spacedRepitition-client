import React from 'react';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';

export default class Quiz extends React.Component {
    render() {
        return (
            <form className={`${inputStyles.formInput} ${formStyles.emojiForm}`}>
                <label htmlFor="description">Your Answer:</label>
                <input id="description" type="text" />
                <button className={buttonStyles.formButton}>Submit</button>
            </form>
        );
    }
}
