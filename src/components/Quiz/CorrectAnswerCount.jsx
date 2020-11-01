import React from 'react';

export default function CorrectAnswerTotal(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  const correctAnswerCount = (size) ? props.correctAnswerCount : '0'

  console.log(props);

  return (
    <div>
      <div className='quiz-answers-totals'>
        Results
      </div>
      <div className='quiz-answers-correct-count'>
        Correct: {correctAnswerCount}
      </div>
    </div>
  );
}