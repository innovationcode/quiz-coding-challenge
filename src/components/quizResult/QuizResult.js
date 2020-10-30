import React from 'react';
import './QuizResult.css';

function QuizResult({ score }) {
      return (
            <div className = "quiz-result"> 
                  <h2>QuizResult....</h2>
                  <h3>Your score is : {score}</h3>
            </div>
      )
}

export default QuizResult;
