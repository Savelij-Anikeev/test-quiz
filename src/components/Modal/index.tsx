import { useEffect, useState } from 'react';

import styles from './Modal.module.css';

import modalStore from '../../app/store/modalStore';

import Question from '../../elements/Question';
import TestFinish from '../../elements/TestFinish';

import CloseButton from '../../features/CloseButton';
import Button from '../../features/Button';



const Modal = () => {  
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [isSent, setIsSent] = useState<boolean>(false);

  const questionAmount = modalStore.currentTest!.questions.length;  

  useEffect(() => {
    // const root = document.querySelector('#root');
    // root!.className = 'overflow-hidden';
  }, [])

  function handleClose() {
    // const root = document.querySelector('#root');
    // root!.className = '';
    modalStore.closeModal();
  }

  function handleUserAnswer(isRight: boolean) {
    if (!isRight) {
      setMistakeCount(prev => prev + 1);
    }

    setIsSent(true);
  }

  function handleSwitchQuestion() {
    setIsSent(prev => !prev);
    if (!checkIfLast()) {
      setQuestionIndex(prev => prev + 1);
    }
  }

  function checkIfLast() {
    return questionIndex === questionAmount
  }

  return (
    <div 
    className={styles.modalWrapper}
    style={{backgroundImage: `url("${modalStore.currentTest?.imgUrl}")`}}>
        <div className={styles.modalInner}>
          <div className={styles.modalBody}>
            
            <>
              <span className={styles.bodyHeader}>
                <h2>{modalStore.currentTest?.title.slice(0, 32)}...</h2>
                <CloseButton onClick={() => handleClose()}/>
              </span>
              {!checkIfLast() ? 
              <>
                <Question 
                questionAmount={questionAmount}
                questionIndex={questionIndex}
                question={modalStore.currentTest!.questions[questionIndex]}
                isSent={isSent}
                setIsSent={handleUserAnswer}/>

                <Button 
                text='next' 
                onCLick={() => handleSwitchQuestion()}
                disabled={!isSent} 
              />
              </>
              : 
              <TestFinish 
              questionAmount={questionAmount}
              mistakeCount={mistakeCount}
              closeModalHandler={() => handleClose()}/>
              }
            </>
          </div>
        </div>
    </div>
  )
}

export default Modal;