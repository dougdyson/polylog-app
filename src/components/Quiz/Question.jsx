import React from 'react';

import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  let question = (size) ? props.question : 'Enter quiz question'

  return (
      <div className='quiz-quesion'>
        {question}
      </div>
  );
}