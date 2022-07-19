import Answer from './Answer';


class MultiChoiceQuestion {
    id: number;
    question: string;
    metaData: string;
    correctAnswer: Answer;
    answers: Answer[];

    constructor(id: number, question: string, metaData: string ,correctAnswer: Answer, answers: Answer[]){
        this.id = id;
        this.question = question;
        this.metaData = metaData;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
    }
}

export default MultiChoiceQuestion;