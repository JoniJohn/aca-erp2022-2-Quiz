import MultiChoiceQuestion from "../models/MultiChoiceQuestion";
import Answer from "../models/Answer";


const questions: MultiChoiceQuestion[] =  [
    new MultiChoiceQuestion(
        1,
        "What does the following print?",
        "console.log(1+1)",
        new Answer("A", "2"),
        [
            new Answer("A", "2"),
            new Answer("B", "11"),
            new Answer("C", "3"),
            new Answer("D", "0"),
        ]
    ),
    new MultiChoiceQuestion(
        2,
        "What does the following print?",
        "console.log(\"1\"+\"1\")",
        new Answer("B", "11"),
        [
            new Answer("A", "2"),
            new Answer("B", "11"),
            new Answer("C", "3"),
            new Answer("D", "0"),
        ]
    ),
    new MultiChoiceQuestion(
        3,
        "Choose the corresponding value x that outputs true.",
        "console.log(x > -5 && x < -3 && x != 0)",
        new Answer("A", "-4"),
        [
            new Answer("A", "-4"),
            new Answer("B", "-5.5"),
            new Answer("C", "0"),
            new Answer("D", "-3"),
        ]
    ),
    new MultiChoiceQuestion(
        4,
        "What will be alerted?",
        "var a = null;\n\nvar b={};\nvar c = a || b;\nalert(c);",
        new Answer("D", "[object Object]"),
        [
            new Answer("A", "true"),
            new Answer("B", "false"),
            new Answer("C", "null"),
            new Answer("D", "[object Object]"),
        ]
    ),
    new MultiChoiceQuestion(
        5,
        "What is the output of this code?",
        "alert((2 <= 1) && (11 < 14));",
        new Answer("A", "false"),
        [
            new Answer("A", "false"),
            new Answer("B", "11"),
            new Answer("C", "true"),
            new Answer("D", "2"),
        ]
    ),
    new MultiChoiceQuestion(
        6,
        "What is the data type of variable x?",
        "let x = true",
        new Answer("D", "boolean"),
        [
            new Answer("A", "undefined"),
            new Answer("B", "number"),
            new Answer("C", "string"),
            new Answer("D", "boolean"),
        ]
    ),
    new MultiChoiceQuestion(
        7,
        "What is the output of this code?",
        "console.log(typeof(NaN))",
        new Answer("B", "number"),
        [
            new Answer("A", "string"),
            new Answer("B", "number"),
            new Answer("C", "Error"),
            new Answer("D", "undefined"),
        ]
    ),
    new MultiChoiceQuestion(
        8,
        "What is the output of this code?",
        "var a = 0;\n a++; alert",
        new Answer("C", "0"),
        [
            new Answer("A", "2"),
            new Answer("B", "1"),
            new Answer("C", "0"),
            new Answer("D", "-1"),
        ]
    ),
    new MultiChoiceQuestion(
        9,
        "You can define classes inside a class.",
        "",
        new Answer("A", "True"),
        [
            new Answer("A", "True"),
            new Answer("B", "False"),
        ]
    ),
    new MultiChoiceQuestion(
        10,
        "Which of the following is a correct Regular expression declaration?",
        "",
        new Answer("A", "var rp = new RegExp(\"[a-zA-Z0-9]\");"),
        [
            new Answer("A", "var rp = new RegExp(\"[a-zA-Z0-9]\");"),
            new Answer("B", "var rp = new regexp(\"[a-zA-Z0-9]\");"),
            new Answer("C", "var rp = new RegExp[a-zA-Z0-9];"),
            new Answer("D", "none of these"),
        ]
    ),
];

export default questions;