import React from 'react';
import './QuestionDisplay.css';


function QuestionDisplay(props) {
      //console.log("Question in QuestionDisplay component  - ", props.ansOptions);

      return (
            <div className= 'questionDisplay'>
                  <span 
                        style={{ fontSize: "16px", fontWeight: "400" }}>
                        {`Question ${props.currentIndex + 1} of ${props.length}`}
                  </span>

                  <h3 className = "question">{props.question}</h3>

                  <p style = {{paddingTop: '12px', paddingBottom:'6px'}}>The options are ...</p>
                  {
                        props.ansOptions ? (props.ansOptions.map((option, index) => {
                             return <button key = {index}
                                          // className = "ans-option-button" 
                                          className = {`ans-option-button ${props.userAnswer === option? "selected" : null}`}
                                          onClick = {() => props.checkAnswer(option)}
                                    >
                                          {option}
                                    </button>
                        })) : <h1>Loading ...</h1>
                  }

                  {props.currentIndex < props.length - 1 && (
                        <button
                              className = "next-button"
                              onClick={props.nextQuestionHandler}
                        >
                              Next
                        </button>
                  )}

                  {props.currentIndex === props.length - 1 && (
                        <button 
                              className = "next-button"
                              onClick={props.finishHandler}
                        >
                              Finish
                        </button>
                  )}
            </div>
      )
}

export default QuestionDisplay;

