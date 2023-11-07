import React from 'react';

function Statistics({ correctAnswers, totalQuestions }) {
  // Calculate the percentage of correct answers
  const percent = (correctAnswers / totalQuestions) * 100;

  // Determine the progress bar color based on the percentage
  let progressBarColor = '';
  if (percent < 20) {
    progressBarColor = 'red';
  } else if (percent >= 20 && percent < 50) {
    progressBarColor = 'orange';
  } else if (percent >= 50 && percent < 80) {
    progressBarColor = 'yellow';
  } else {
    progressBarColor = 'green';
  }

  return (
    <div className="statistics-container">
      <h2>Congratulations!</h2>
      <p>You got {percent}% correct</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percent}%`, backgroundColor: progressBarColor }}
        />
      </div>
    </div>
  );
}

export default Statistics;
