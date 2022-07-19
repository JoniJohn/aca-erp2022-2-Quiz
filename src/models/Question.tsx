import Answer from './Answer';


class Question {
    question: string;
    correctAnswer: Answer;
    answers: Answer[];

    constructor(question: string, correctAnswer: Answer, answers: Answer[]){
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.answers = answers;
    }
}

export default Question;