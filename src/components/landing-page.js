import React from 'react';
import {Link} from 'react-router-dom';

import Button from './button';
import emojiLogo from '../images/smileyEmoji.svg';

import styles from './styles/landing-page.module.css';


export default function LandingPage(props) {

    return (
      <div className={styles.allContent}>
        <section className={styles.landing}>
          <img className={styles.landingLeftCloud}
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
                className="startLandingPage"
              />
            </Link>
          </div>
          <img className={styles.landingRightCloud}
            src={require('../images/rightCloud.svg')}
            alt="cloud illustration"
          />
        </section>

        <section className={styles.featurePage}>
          <div className={styles.leftCloudBackground}>
            <div className={styles.mobileFeatureImgBkgrd}>
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
            <div className={styles.mobileFeatureImgBkgrd}>
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

        <section className={styles.demoPage}>
          <img className={styles.demoLeftCloud}
            src={require('../images/leftCloud.svg')}
            alt="cloud illustration"
          />

          <div className={styles.demoHeader}>
            <h3 className={styles.h3}>
              Want to try it out?
            </h3>
            <h4 className={styles.h4}>
              Use this demo account to test out Learn Emoji
            </h4>
          </div>

          <div className={styles.demoAccount}>
            <p className={styles.demoLabel}>USERNAME</p>
            <p className={styles.demoValue}>demouser1</p>
            <p className={styles.demoLabel}>PASSWORD</p>
            <p className={styles.demoValue}>password123</p>
          </div>

          <Link to="/login"
            className={styles.buttonLink}
          >
            <Button
              label="Start Learning"
              className="startDemoPage"
            />
          </Link>

          <img className={styles.demoRightCloud}
            src={require('../images/rightCloud.svg')}
            alt="cloud illustration"
          />
        </section>

        <footer className={styles.footer}>
          <p>Made by James & Courtney</p>
        </footer>
      </div>
    );
}
