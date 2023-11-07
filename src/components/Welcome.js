import React from 'react';

import * as Styled from './Welcome.styles';

function Welcome({ onStart }) {
  return (
    <Styled.WelcomeContainer>
      <h1>?משרד או מטרד</h1>
      <p>?האם תוכלו לנחש מהו משרד ממשלתי אמיתי</p>
      <img src={require('../data/img/landing_photo.jpg')} alt="mitrad" width="500" />
      <Styled.Button onClick={onStart}>!התחילו לשחק</Styled.Button>
    </Styled.WelcomeContainer>
  );
}

export default Welcome;