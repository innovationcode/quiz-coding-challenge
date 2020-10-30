import React from 'react';
import Header from './components/header/Header.js'
import QuestionDisplay from './components/questionDisplay/QuestionDisplay.js';
import { data } from './questionData/questionData.js'
import './App.css';

class App extends React.Component {
  state = {
      userAnswer: null,
      score: 0,
      currentIndex: 0,
      ansOptions: [],
      questionEnd: false,
      disabled: true,
      quizEnd: false
  }

  componentDidMount() {
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
    const { userAnswer, correctAnswer, score } = this.state;
    if (userAnswer === correctAnswer) {
      this.setState({
        score: score + 1
      });
    }

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

  finishHandler = () => {
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
          <QuestionDisplay question = {this.state.question}
              ansOptions = {this.state.ansOptions}
              correctAnswer = {this.state.correctAnswer}
              currentIndex = {this.state.currentIndex}
              length= {length}
              nextQuestionHandler = {this.nextQuestionHandler}
              finishHandler = {this.finishHandler}
              quizEnd ={this.state.quizEnd}
          />        
      </div>
    );
  }
}

export default App;
