import { EmojiGradeEnum, EmojiType } from "../app/types";

import { emojiGradeList } from "./constants";


export const getEmojiByGrade = (grade: number) => {
    // grade is float type that takes palce between 0 and 1
    let stringGrade:EmojiGradeEnum;    

    // getting string grade
    if(grade >= 0.9) {
        stringGrade = EmojiGradeEnum.EXCELLENT;
    } else if (grade >= 0.7) {
        stringGrade = EmojiGradeEnum.GOOD;
    } else if (grade >= 0.6) {
        stringGrade = EmojiGradeEnum.OKAY;
    } else if (grade >= 0.5) {
        stringGrade = EmojiGradeEnum.BAD;
    } else {
        stringGrade = EmojiGradeEnum.POOR;
    }
    // it cannot be undefined because `emojiGradeList` contains all enum values
    const Emoji: EmojiType = emojiGradeList.find(elem => elem.grade === stringGrade)!;

    return Emoji;
}
