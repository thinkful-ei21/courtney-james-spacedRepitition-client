import React from 'react';
import {Link} from 'react-router-dom';

import Button from './button';
import emojiLogo from '../images/smileyEmoji.svg';

import styles from './styles/landing-page.module.css';


export default function LandingPage(props) {

    return (
      <div className={styles.allContent}>
        <section className={styles.landing}>
          <img className={styles.leftCloud}
            src={require('../images/leftCloud.svg')}
            alt="cloud illustration"
          />
          <div className={styles.landingContent}>
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
          </div>
          <img className={styles.rightCloud}
            src={require('../images/rightCloud.svg')}
            alt="cloud illustration"
          />
        </section>

        <section className={styles.featurePage}>
          <div className={styles.leftCloudBackground}>
            <div className={styles.mobileImgBkgrd}>
              <img className={styles.feedback}
                src={require('../images/feedback.svg')}
                alt="emoji card feedback"
              />
            </div>
            <h2 className={styles.h2}>
              Get tested on your emoji vocabulary & get feedback
              if you're correct or not.
            </h2>
          </div>
        </section>

        <section className={styles.featurePage}>
          <div className={styles.rightCloudBackground}>
            <div className={styles.mobileImgBkgrd}>
              <img className={styles.algo}
                src={require('../images/algo.svg')}
                alt="shows how algorithm works when user gets question correct and incorrect"
              />
            </div>
            <h2 className={styles.h2}>
              Uses a spaced repetition algorithm that allows you
              to get tested more on what you don't know.
            </h2>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Made by James & Courtney</p>
        </footer>
      </div>
    );
}
