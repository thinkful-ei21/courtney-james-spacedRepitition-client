import React from 'react';
import buttonStyles from './styles/button.module.css';
import inputStyles from './styles/input.module.css';
import formStyles from './styles/forms.module.css';


export default function Quiz(props) {

  return (
    <form className={`${inputStyles.formInput} ${formStyles.emojiForm}`}>
      <label htmlFor="description">
        Your Answer:
      </label>
      <input id="description" type="text"></input>
      <button
        className={buttonStyles.formButton}
      >
        Submit
      </button>
    </form>
  );
}
