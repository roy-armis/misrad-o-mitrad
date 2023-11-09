import React from 'react';

import {IS_MISRAD, MISRAD_TEXT, MITRAD_TEXT} from '../consts';

import * as Styled from './Answer.styles';

function Answer({ correct, onNextQuestion, isLastQuestion, question }) {
  const type = question.type === IS_MISRAD ? MISRAD_TEXT : MITRAD_TEXT;
  let imgSrc = question.img ? require(`../data/img/${question.img}.webp`) : require(`../data/img/mitrad.webp`);

  return (
    <Styled.AnswerContainer correct={correct}>
      <h1 className="answer-name">
        !<a href={question.url} target="_blank" rel="noreferrer">{question.name}</a> הוא {type}
      </h1>
      <div className="answer-picture"><img src={imgSrc} alt={question.name} width="500" /></div>
      <Styled.Description >{question.text}</Styled.Description>
      {isLastQuestion ? (
        <Styled.Button onClick={onNextQuestion}>לתוצאות</Styled.Button>
      ) : (
        <Styled.Button onClick={onNextQuestion}>לשאלה הבאה</Styled.Button>
      )}
    </Styled.AnswerContainer>
  );
}

export default Answer;
