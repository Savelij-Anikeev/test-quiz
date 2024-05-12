import React from 'react';

import styles from './CloseButton.module.css';

import closeImg from '../../shared/static/images/close-100-light.png';


interface ICloseButtonProps {
  onClick: Function
}

const CloseButton = (props: ICloseButtonProps) => {
  return (
    <img 
      src={closeImg} 
      alt="close" 
      className={styles.closeIcon}
      onClick={() => props.onClick()}
    />
  )
}

export default CloseButton;