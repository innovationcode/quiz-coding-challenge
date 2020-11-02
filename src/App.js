import React from 'react';
import Header from './components/header/Header.js'
import QuestionDisplay from './components/questionDisplay/QuestionDisplay.js';
import { data } from './questionData/questionData.js'
import QuizResult from './components/quizResult/QuizResult.js';
import QuestionAndAnswer from './components/questionAndAnswer/QuestionAndAnswer.js';
import './App.css';

// const data_other_set = (data01) => {
//     const data =  data01.sort(() => Math.random() - Math.random()).slice(0, 10)
//     return data;
// }

class App extends React.Component {
  state = {
      userAnswer: null,
      score: 0,
      currentIndex: 0,
      ansOptions: [],
      questionEnd: false,
      quizEnd: false
  }

  componentDidMount() {
    console.log("Data  :-- ", data)
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: data[currentIndex].question,
        ansOptions: [
          ...data[currentIndex].incorrect,
          data[currentIndex].correct
        ].sort(),
        correctAnswer: data[currentIndex].correct
      };
    });
  }

  nextQuestionHandler = () => {
    alert(`Correct Answer : - ${this.state.correctAnswer} `)
    const { userAnswer, correctAnswer } = this.state;
    //console.log("userAnswer  : ", userAnswer ,"\ncorrectAnswer : ", correctAnswer)
    if (userAnswer === correctAnswer) {
      this.setState({
        score : this.state.score + 1 
      }, () => console.log("score in setState..  : - ",this.state.score)
      );
    }
    //console.log("score  : - ",this.state.score)
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentIndex } = this.state;
    if (this.state.currentIndex !== prevState.currentIndex) {
      this.setState(() => {
        return {
          question: data[currentIndex].question,
          ansOptions: [
            ...data[currentIndex].incorrect,
            data[currentIndex].correct
          ].sort(),
          correctAnswer: data[currentIndex].correct
        };
      });
    }
  }

  checkAnswer = (answer) => {
    this.setState({
        userAnswer: answer,
    })
  }

  finishHandler = () => {
    const { userAnswer, correctAnswer } = this.state;
    //console.log("userAnswer  : ", userAnswer ,"\ncorrectAnswer : ", correctAnswer)
    if (userAnswer === correctAnswer) {
      this.setState({
        score : this.state.score + 1 
      }, () => console.log("score in setState..  : - ",this.state.score)
      );
    }

    if (this.state.currentIndex === data.length - 1) {
      this.setState({
        quizEnd: true
      });
    }
  };
  
  render() {
    const length = data.length;
    return (
      <div className="App"> 
        <Header />
 
        {!this.state.quizEnd ? (  
            <QuestionDisplay question = {this.state.question}
                ansOptions = {this.state.ansOptions}
                correctAnswer = {this.state.correctAnswer}
                currentIndex = {this.state.currentIndex}
                length= {length}
                nextQuestionHandler = {this.nextQuestionHandler}
                finishHandler = {this.finishHandler}
                checkAnswer ={this.checkAnswer}
                userAnswer = {this.state.userAnswer}
            />
          
        ) : (
          <>
            <QuizResult
                score = {this.state.score}
            />
            <QuestionAndAnswer /> 
          </>
        )}     
      </div>
    );
  }
}

export default App;
