import React from 'react';

import { IS_MISRAD, IS_MITRAD, MISRAD_TEXT, MITRAD_TEXT } from '../consts';
function Question({ question, onAnswer }) {

  const handleAnswerClick = (selectedType) => {
    onAnswer(selectedType === question.type);
  };

  return (
    <div className="question-container">
      <h2>{question.name}</h2>
      <div className="answer-buttons">
        <button
          onClick={() => handleAnswerClick(IS_MISRAD)}
        >
          {MISRAD_TEXT}
        </button>
        <button
          onClick={() => handleAnswerClick(IS_MITRAD)}
        >
          {MITRAD_TEXT}
        </button>
      </div>
    </div>
  );
}

export default Question;
