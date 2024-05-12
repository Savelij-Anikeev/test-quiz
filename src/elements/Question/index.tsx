import React, { useState } from 'react'

import styles from './Question.module.css';

import Button from '../../features/Button';

import { QuestionType } from '../../app/types';


interface IQuestionProps {
    question: QuestionType
    questionAmount: number
    questionIndex: number
    isSent: boolean
    setIsSent: Function
}

const Question = (props: IQuestionProps) => {
    const [userAnswer, setUserAnswer] = useState<string|false>(false);

    function handleClick() {
        const rightAnswer = props.question.answers.find(answer => answer.isRight);
        props.setIsSent(rightAnswer?.text === userAnswer)
        setUserAnswer(false);
    }

    return (
        <div className={styles.questionWrapper}>
            <span className={styles.questionText}>
                ({props.questionIndex+1}/{props.questionAmount}) { props.question.text }
                </span>
            <div className={styles.answers}>
                { props.question.answers.map(answer => {
                    let answerStyles: string;

                    if (props.isSent) {
                        answerStyles = answer.isRight ? `${styles.right}` : `${styles.mistake}`;
                    }
                    
                    return (
                        <div key={answer.text}>
                        <label className={`${styles.inputLabel} ${answerStyles!}`}>
                            <input type="radio" 
                            name='answer' 
                            value={ answer.text } 
                            className={styles.inputRadio}
                            onChange={e => {setUserAnswer(e.target.value)}}
                            />
                            <p className={styles.inputTitle}>{ answer.text }</p>
                        </label>
                        {props.isSent && answer.isRight
                        && <p className={`${answerStyles!} ${styles.answerComment}`}>
                            {answer.commentary}
                        </p>}
                        </div>
                    )
            })}
            </div>
            <span style={{marginTop: '2rem'}}>
                {!props.isSent 
                && <Button 
                text='verify' 
                onCLick={() => handleClick()}
                disabled={!userAnswer}/>
                }
            </span>
        </div>
    )
}

export default Question;