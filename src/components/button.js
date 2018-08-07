import React from 'react';
import styles from './styles/button.module.css';

export default function Button(props) {
  const className = props.className;

  return (
    <button className={[styles[className], styles.actionButton].join(' ')}>
      {props.label}
    </button>
  );
}
