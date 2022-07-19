import MultiChoiceQuestion from '../models/MultiChoiceQuestion';
import Answer from '../models/Answer';

class Questions {
    answerMultiChoiceQuestion(question: MultiChoiceQuestion, userAnswer: Answer): boolean {
        var res = false;

        const correctAnswer = question.correctAnswer;

        // TODO: Improve the way we are checking for equality
        res = correctAnswer.letter === userAnswer.letter && correctAnswer.text === userAnswer.text;

        return res;
    }
}

export default Questions;