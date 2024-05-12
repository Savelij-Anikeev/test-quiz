import React from 'react';

import styles from './Filters.module.css';

import SelectBlock from '../SelectBlock';
import filterStore from '../../app/store/filterStore';


const Filters = () => {    
    return (
        <div className={styles.filtersWrapper}>
            <SelectBlock items={filterStore.categoryFilters!} />
            <SelectBlock items={filterStore.difficultyFilters!}  />
        </div>
    )
}

export default Filters;