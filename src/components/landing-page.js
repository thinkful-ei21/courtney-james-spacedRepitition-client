import React from 'react';
import {Link} from 'react-router-dom';

import LoginPage from './login-page';
import Button from './button';
import emojiLogo from '../images/smileyEmoji.svg';

import styles from './styles/landing-page.module.css';


export default function LandingPage(props) {

    return (
      <div>
        <section>
          <img className={styles.logo}
            src={emojiLogo}
            alt="winking emoji"
          />
          <h1 className={styles.header}>
            Learn Emoji in just a few minutes a day
          </h1>

          <Link to="/login"
            className={styles.buttonLink}
          >
            <Button
              label="Start Learning"
              className="startButton"
            />
          </Link>
        </section>

        <footer>
          <p>Made by James & Courtney</p>
        </footer>
      </div>
    );
}
