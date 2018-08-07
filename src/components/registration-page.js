import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';
import styles from './styles/forms.module.css';
import emojiLogo from '../images/smileyEmoji.svg';


export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className={styles.allContent}>
          <Link to="/"
            className={styles.logoLink}
          >
            <img className={styles.logo}
              src={emojiLogo}
              alt="emoji logo"
            />
          </Link>
          <h2 className={styles.header}>
            Sign up
          </h2>
          <RegistrationForm />
          <Link to="/login"
            className={styles.linkToOtherForm}
          >
            Login
          </Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
