import React from 'react';

export default function IncorrectAnswerCount(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  const incorrectAnswerCount = (size) ? props.incorrectAnswerCount : '0'

  return (
    <div>
      Incorrect: {incorrectAnswerCount}
    </div>
  );
}