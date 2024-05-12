import React from 'react';

import styles from './Footer.module.css';
import HeaderText from '../../features/HeaderText';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
        <div className={styles.footerInner}>
            <HeaderText>UTMN</HeaderText>
            <span className={styles.footerInfo}>
              developed in 
              <span className={styles.boldy}> 2024</span><br/>
              for English Project<br />
            </span>
        </div>
    </footer>
  )
}

export default Footer;