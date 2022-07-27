import React from "react";
import MultiChoiceQuestion  from "../models/MultiChoiceQuestion";

function Question(index: number, question: MultiChoiceQuestion) {
    return <div>
                <h4 className="text-info">{ index }. { question!.question }</h4>
                {question!.metaData.length !== 0 &&
                    <div className="pb-3 pt-2">
                        <code className="p-2 rounded">
                            { question!.metaData }
                        </code>
                    </div> 
                } 
                <div className="tab">
                { 
                    question!.answers.map( 
                        answer => <div>
                            <input className="form-check-input" type="radio" id={ answer.letter + index } name="answer" value={ answer.letter  } />
                            <label className="ps-3"> { answer.text } </label> <br />
                        </div>
                    ) 
                }
                </div>
            </div>
}

export default Question;