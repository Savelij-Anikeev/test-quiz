import Test from '../Test';

import styles from './TestList.module.css';

import { TestType } from '../../app/types';

import { observer } from 'mobx-react-lite';
import TestPlaceholder from '../placeholders/TestPlaceholder';

import HeaderText from '../../features/HeaderText';

interface TestList {
  tests: TestType[]
  title?: string 
}

const TestList = observer((props: TestList) => {
  return (
    <div className={styles.testListWrapper}>
        {/* rendering title if it is there */}
        {props.title && <HeaderText>{props.title}</HeaderText>}
    
        <div className={styles.testListInner}>
            {props.tests.length !== 0
            ? <>
              {props.tests.map(elem => (
                  <Test {...elem} key={elem.title} description={`${elem.description.slice(0, 64)}...`}/>
              ))}
              </>
            : <>
                <TestPlaceholder />
              </>
            }
        </div>
    </div>
  )
})

export default TestList;