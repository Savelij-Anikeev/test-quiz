import styles from './mainPage.module.css';

import Modal from '../../components/Modal';
import Header from '../../components/Header';
import TestList from '../../components/TestList';
import TestListFiltered from '../../components/TestListFiltered';
import Footer from '../../components/Footer';

import { observer } from 'mobx-react-lite';

import modalStore from '../../app/store/modalStore';
import testStore from '../../app/store/testStore';


const MainPage = observer(() => {
  return (
    <>
      {modalStore.isOpen
      ? <Modal />
      : <>
          <Header />

          <main className={styles.main}>
            {/* all tests */}
            <TestList tests={testStore.tests} title='All tests'/>

            {/* filtering tests */}
            <TestListFiltered />

          </main>

          {/* Footer */}
          <Footer />
        </>
      }
    </>
  )
})

export default MainPage;