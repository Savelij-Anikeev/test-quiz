import React from 'react';

import styles from './Test.module.css';
import { TestType } from '../../app/types';

import Button from '../../features/Button';

import modalStore from '../../app/store/modalStore';


const Test = (props: TestType) => {
  const [isMouseOver, setIsMouseOver] = React.useState<boolean>(false);

  function handleClick() {
    modalStore.openModal(props.title);
  }

  return (
    <div 
    className={styles.TestWrapper}
    style={{
      backgroundImage: `url("${props.imgUrl}")`
    }}
    onMouseOver={e => setIsMouseOver(true)}
    onMouseOut={e => setIsMouseOver(false)}
    >
      {isMouseOver 
      ?
        <div className={styles.TestData}>
          <div className={styles.TextFields}>
            <p className={styles.TestTitle}>{ props.title }</p>
            <p className={styles.TestDescription}>{ props.description }</p>
          </div>
          <Button text={'go'} onCLick={handleClick}/>
        </div>
      : 
      <>
        <span className={styles.diffTitle}>Difficulty:</span> 
        <span className={styles.TestDiff}>
          {props.difficulty}
        </span>
      </>
      }
    </div>
  )
}

export default Test;