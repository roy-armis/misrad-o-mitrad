import React from 'react';

import { IS_MISRAD, IS_MITRAD, MISRAD_TEXT, MITRAD_TEXT } from '../consts';

import * as Styled from './Question.styles';

function Question({ question, onAnswer, index, totalQuestions }) {

  const handleAnswerClick = (selectedType) => {
    onAnswer(selectedType === question.type);
  };

  return (
    <div className="question-container">
      <h2>{question.name}</h2>
      <Styled.ButtonContainer className="question-buttons">
        <Styled.Button
          onClick={() => handleAnswerClick(IS_MITRAD)}
        >
          {MITRAD_TEXT}
        </Styled.Button>
        <Styled.Button
          onClick={() => handleAnswerClick(IS_MISRAD)}
        >
          {MISRAD_TEXT}
        </Styled.Button>
      </Styled.ButtonContainer>
      <footer>{`שאלה ${index} מתוך ${totalQuestions}`}</footer>
    </div>
  );
}

export default Question;
