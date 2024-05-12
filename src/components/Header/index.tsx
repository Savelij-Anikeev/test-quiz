import React from 'react';

import styles from './Header.module.css';

// import logo from '../../shared/static/images/logo-100-light.png';
// import logo from 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png';


const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        <img 
        src={`https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Nerd%20Face.png`} 
        alt="asd" 
        className={styles.headerImg} />
        <h1 className={styles.headerText}>History Quiz</h1>
      </div>
    </header>
  )
}

export default Header;