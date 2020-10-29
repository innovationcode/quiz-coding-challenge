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

  render() {
    return (
      <div className="App">
        <Header />
        <QuestionDisplay />
      </div>
    );
  }
}

export default App;
