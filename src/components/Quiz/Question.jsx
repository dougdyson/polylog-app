import React from 'react';

import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  // initializel; replace with state
  let question = 'Enter quiz question'
  const size = Object.keys(props).length;

  if (size) {
    question = props.question;
  }

  return (
    <div className='quiz-question'>
      {question}
    </div>
  );
}