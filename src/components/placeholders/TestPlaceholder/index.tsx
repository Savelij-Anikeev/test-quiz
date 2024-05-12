import styles from './TestPlaceholder.module.css';

import HeaderText from '../../../features/HeaderText';


const TestPlaceholder = () => {
  return (
      <div className={styles.testPlaceholder}>
        <div className={styles.testInner}>
          <span className={styles.testError}>404.</span>
          <h2>Not Found!</h2>
          <img 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png" 
          alt="smile" 
          />
        </div>
      </div>
  )
}

export default TestPlaceholder;