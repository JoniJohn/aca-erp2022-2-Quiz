import Questions from "../../quiz/Questions";
import MultiChoiceQuestion from "../../models/MultiChoiceQuestion";
import Answer from "../../models/Answer";

describe('Answering Questions', () => {
    // system under test
    const sut = new Questions();
    // question
    const text = "What is 1+1?";
    // multi choice
    const a = new Answer("A", "2");
    const b = new Answer("B", "11");
    const c = new Answer("C", "3");
    const d = new Answer("D", "0");

    // question with answers
    const multiChoiceQuestion = new MultiChoiceQuestion(text, a, [a, b, c, d]);
    
    it('should return true if correct answer is given', () => {
        // arrange
        const userAnswer = new Answer("A", "2");
        // act
        const res = sut.answerMultiChoiceQuestion(multiChoiceQuestion, userAnswer);
        // assert
        expect(res).toBe(true);
    });

    it('should return false if wrong is given', () => {
        // arrange
        const userAnswer = new Answer("B", "11");
        // act
        const res = sut.answerMultiChoiceQuestion(multiChoiceQuestion, userAnswer);
        // assert
        expect(res).toBe(false);
    });
});