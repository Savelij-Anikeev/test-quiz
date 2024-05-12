import React from 'react';

import styles from './SelectBlock.module.css';

import filterStore from '../../app/store/filterStore';

import { TestCategory, TestDifficulty } from '../../app/types';

import { observer } from 'mobx-react-lite'; 


interface ISelectBlockProps {
  items: TestCategory[] | TestDifficulty[];
}


const SelectBlock = observer((props: ISelectBlockProps) => {
  function handleSwitch(value: TestCategory | TestDifficulty | undefined) {
    // checking if we should drop filter if user choose already choosen filter    
    // checking type of value because component used by different types
    if (Object.values(TestCategory).includes(value as TestCategory)) {
      // if TestCategory
      if (value === filterStore.currentCategoryFilter) {
        value = undefined;
      }
      filterStore.setCategoryFilter(value as TestCategory);
    } else {
      // if TestDifficulty
      if (value === filterStore.currentDifficultyFilter) {
        value = undefined;
      }
      filterStore.setDifficultyFilter(value as TestDifficulty);
    }
  }

  return (
    <div className={styles.selectWrapper}>
        {props.items.map(item => {
          // console.log(item, filterStore.currentCategoryFilter);
          const itemStyles: string = (item === filterStore.currentCategoryFilter || item === filterStore.currentDifficultyFilter) 
          ? `${styles.selectOption} ${styles.active}` : `${styles.selectOption}`;

          return (
            <span 
            className={itemStyles}
            onClick={() => handleSwitch(item)}
            key={item}>
              {item}
            </span>
        )})}
    </div>
  )
})

export default SelectBlock;