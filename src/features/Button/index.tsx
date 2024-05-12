import React from 'react';

import styles from './Button.module.css';

interface IButtonProps {
    text: string
    onCLick: Function 
    disabled?: boolean
}

const Button = (props: IButtonProps) => {
  return (
    <button onClick={() => props.onCLick()} className={styles.buttonWrapper} disabled={props.disabled}>
        <span className={styles.buttonText}>{props.text}</span>
    </button>
  )
}

export default Button;