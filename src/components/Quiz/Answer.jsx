import React from 'react';
import Button from '../Button/Button';

import './quiz.css';
import "fontsource-roboto";

export default function Answer(props) {

  console.log(props);
  
  // initialize; clean up with state
  let answer = 'Enter answer question'
  
  const size = Object.keys(props).length;

  if (size) {
    answer = props.answer;
  }

  return (
    <div>
      <Button variant='quiz-answer-button'>{answer}</Button>
    </div>
  );
}