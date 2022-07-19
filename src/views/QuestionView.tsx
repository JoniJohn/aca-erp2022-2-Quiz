import React from "react";

import Space from "../custom_components/Space";
import { Link, useParams } from "react-router-dom";

import questions from "../data/Questions";

function QuestionView() {
    const { id } = useParams();
    var index = parseInt(id!);

    // question with answers
    const multiChoiceQuestion = questions.at(index! - 1);
    
    
    
    return (
        <div className="container">
            <Space></Space>
            <h2>Please select the correct answer</h2>
            
            <div className="border border-info rounded p-3">
                <form action="#" >
                    <h4 className="text-info">{ id }. { multiChoiceQuestion!.question }</h4>
                    {multiChoiceQuestion!.metaData.length !== 0 &&
                    <div className="pb-3 pt-2">
                        <code className="p-2 rounded">
                            { multiChoiceQuestion!.metaData }
                        </code>
                    </div>
                        
                    }
                     
                    { 
                        multiChoiceQuestion!.answers.map( 
                            answer => <div>
                                <input className="form-check-input" type="radio" id={ answer.letter } name="answer" value={ answer.letter }></input>
                                <label className="ps-3"> { answer.text }</label> <br />
                            </div>
                        ) 
                    }
                </form>
                <Space></Space>
                { index - 1 !== 0 && 
                   <Link to={{ 
                    pathname: `/question/${index - 1}`,     
                 }} 
                 className="btn btn-info me-4">Previous</Link> 
                }

                { index - 1 === 0 && 
                   <Link to={{ 
                    pathname: `/`,     
                 }} 
                 className="btn btn-danger me-4">Cancel Quiz</Link> 
                }

                { index   < questions.length &&
                    <Link to={{ 
                    pathname: `/question/${index + 1}`,
                 }}  className="btn btn-info">Answer</Link>
                }

                { index + 1 > questions.length && 
                   <Link to={{ 
                    pathname: `/`,     
                 }} 
                 className="btn btn-success">Finish Quiz</Link> 
                }
            </div>
        </div>
    );
}

export default QuestionView;