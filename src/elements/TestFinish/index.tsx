import styles from './TestFinish.module.css';

import Link from '../../features/Link';

import GradeEmoji from '../GradeEmoji';


interface ITestFinishProps {
    questionAmount: number
    mistakeCount: number
    closeModalHandler: Function
}

const TestFinish = (props: ITestFinishProps) => {

    return (
        <div className={styles.finish}>
            <GradeEmoji 
            mistakeAmount={props.mistakeCount} 
            overallAmount={props.questionAmount}/>

            <span className={styles.finishText}>
                You got {`${props.questionAmount - props.mistakeCount}/${props.questionAmount}`}
            </span>

            <Link onCLick={() => props.closeModalHandler()}>
                Go to the main page
            </Link>
        </div> 
  )
}

export default TestFinish;