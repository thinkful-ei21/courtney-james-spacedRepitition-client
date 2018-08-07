import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import styles from './styles/forms.module.css';
import emojiLogo from '../images/smileyEmoji.svg';


export function LoginPage(props) {
  // If we are logged in redirect straight to the user's dashboard
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
          Login
        </h2>
        <LoginForm />
        <Link to="/register"
          className={styles.linkToOtherForm}
        >
          Register
        </Link>
    </div>
  );
}


const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
