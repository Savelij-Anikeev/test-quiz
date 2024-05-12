import styles from './GradeEmoji.module.css';

import { getEmojiByGrade } from '../../shared/utils';


interface IGradeEmojiProps {
    mistakeAmount: number
    overallAmount: number
}

const GradeEmoji = (props: IGradeEmojiProps) => {
    // calculating grade that will help us get emoji
    const grade = (props.overallAmount - props.mistakeAmount) / props.overallAmount;    
    const emoji = getEmojiByGrade(grade);

    return (
        <div className={styles.emojiWrapper}>
            <h1 className={styles.emojiHeader}>
                { emoji.grade }
            </h1>
            {/* if image not loaded yet, useing loading */}
            <img 
            src={ emoji.url } 
            alt="emoji" 
            className={styles.emojiImg}
            />
            <div>
    </div>
        </div>
    )
}

export default GradeEmoji;