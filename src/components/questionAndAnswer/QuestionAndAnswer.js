import React from 'react'
import './QuestionAndAnswer.css';
import  { data } from '../../questionData/questionData.js';

function QuestionAndAnswer() {
      return (
            <div className = "question-and-answer-main">
                  <h2>Question and answer</h2>
                  {
                        data.map((question, index) => {
                              return (
                                    <div style = {{padding:'5px'}}>
                                          <p>{`Question ${index + 1} - ${question.question}`}</p>
                                          <p style = {{paddingTop:'2px', color:'#343434'}}>{`Correct answer  - ${question.correct}`}</p>
                                    </div>
                              )
                        })
                  }
            </div>
      )
}

export default QuestionAndAnswer;
