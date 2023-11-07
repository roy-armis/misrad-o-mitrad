import React from 'react';

function Statistics({ correctAnswers, totalQuestions }) {
  const percent = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="statistics-container">
      <h2>!כל הכבוד</h2>
      <p>צדקת ב {percent}% מהתשובות</p>
    </div>
  );
}

export default Statistics;
