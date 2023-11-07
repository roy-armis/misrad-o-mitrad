import React from 'react';

import { IS_MISRAD, IS_MITRAD, MISRAD_TEXT, MITRAD_TEXT } from '../consts';

import * as Styled from './Question.styles';

function Question({ question, onAnswer }) {

  const handleAnswerClick = (selectedType) => {
    onAnswer(selectedType === question.type);
  };

  return (
    <div className="question-container">
      <h2>{question.name}</h2>
      <Styled.ButtonContainer>
        <Styled.Button
          onClick={() => handleAnswerClick(IS_MISRAD)}
        >
          {MISRAD_TEXT}
        </Styled.Button>
        <Styled.Button
          onClick={() => handleAnswerClick(IS_MITRAD)}
        >
          {MITRAD_TEXT}
        </Styled.Button>
      </Styled.ButtonContainer>
    </div>
  );
}

export default Question;
