import React, { useState } from 'react';
import './App.css';

import Question from './components/Question';
import Answer from './components/Answer';
import Statistics from './components/Statistics';

import { APP_STATES } from './consts';

import questionsData from './data/questions.json';

const questions = shuffle(questionsData);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [currentState, setCurrentState] = useState(APP_STATES.QUESTION);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(null);


  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setLastAnswerCorrect(isCorrect);
    setCurrentState(APP_STATES.ANSWER);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentState(APP_STATES.QUESTION);
    } else {
      setCurrentState(APP_STATES.FINISHED);
    }
  };

  return (
    <div className="App">
      {currentState === APP_STATES.QUESTION && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      {currentState === APP_STATES.ANSWER && (
        <Answer
          correct={lastAnswerCorrect}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
          question={questions[currentQuestionIndex]}
        />
      )}
      {currentState === APP_STATES.FINISHED && (
        <Statistics correctAnswers={correctAnswers} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
