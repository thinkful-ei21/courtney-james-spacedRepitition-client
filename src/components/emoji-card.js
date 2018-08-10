import React from 'react';
import emoji from 'emoji-name-map';

import styles from './styles/card.module.css';

export default function Card(props) {

    const userAnsweredTag = (
      <p className={styles.description}
        aria-live="polite"
      >
        {props.description}
      </p>
    );

    return (
        <div className={styles.card}>
            <span className={styles.emoji} role="img" aria-label={props.description}>
                {emoji.get(`${props.emoji}`)}
            </span>
            {props.userAnswered ? userAnsweredTag : ''}
        </div>
    );
}
