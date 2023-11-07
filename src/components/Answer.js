import React from 'react';

import {IS_MISRAD, MISRAD_TEXT, MITRAD_TEXT} from '../consts';

function Answer({ correct, onNextQuestion, isLastQuestion, question }) {
  const type = question.type === IS_MISRAD ? MISRAD_TEXT : MITRAD_TEXT;
  let imgSrc = question.img ? require(`../data/img/${question.img}`) : require(`../data/img/mitrad.png`);

  return (
    <div style={{backgroundColor: correct ? 'green' : 'red', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 className="answer-name">
        !<a href={question.url} target="_blank" rel="noreferrer">{question.name}</a> הוא {type}
      </h1>
      <div className="answer-picture"><img src={imgSrc} alt={question.name} /></div>
      <p style={{width: '60%'}}>{question.text}</p>
      {isLastQuestion ? (
        <button onClick={onNextQuestion}>Finish</button>
      ) : (
        <button onClick={onNextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Answer;
