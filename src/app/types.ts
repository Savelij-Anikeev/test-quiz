// questions
// enums
export enum TestDifficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD',
    EXTREME = 'EXTREME'
}

export enum TestCategory {
    RUSSIA = 'RUSSIA',
    ENGLAND = 'ENGLAND',
    AMERICA = 'USA',
}
// types
export type AnswerType = {
    text: string
    isRight: boolean
    commentary?: string
}

export type QuestionType = {
    text: string
    answers: AnswerType[]
}

export type TestType = {
    title: string
    description: string
    imgUrl: string

    category: TestCategory
    difficulty: TestDifficulty
    questions: QuestionType[]
}

// emoji's
// enums
export enum EmojiGradeEnum {
    EXCELLENT = 'EXCELLENT',
    GOOD = 'GOOD',
    OKAY = 'OKAY',
    BAD = 'BAD',
    POOR = 'POOR'
}

// types
export type EmojiType = {
    grade: EmojiGradeEnum
    url: string
}