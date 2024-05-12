import styles from './TestListFiltered.module.css';

import TestList from '../TestList';
import Filters from '../../elements/Filters';


import HeaderText from '../../features/HeaderText';
import testStore from '../../app/store/testStore';

import { observer } from 'mobx-react-lite';
import filterStore from '../../app/store/filterStore';


const TestListFiltered = observer(() => {
    return (
        <div className={styles.testListFilteredWrapper}>
            <HeaderText>Filters</HeaderText>
            <Filters />
            <TestList tests={testStore.getFilteredTests()}/>
        </div>
    )
})

export default TestListFiltered;