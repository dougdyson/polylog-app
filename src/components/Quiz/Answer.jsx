import React from 'react';
import Button from '../Button/Button';
import TextareaAutosize from 'react-textarea-autosize';


import './quiz.css';
import "fontsource-roboto";

export default function Answer(props) {

  console.log(props);
  
  // initialize; replace with state
  const size = Object.keys(props).length;

  const answer = (size) ? props.answer : 'Select quiz answer'

  return (
    <div>
      <TextareaAutosize className='quiz-answer-textarea' placeholder='Enter answer' />
      <div className='quiz-answer-settings-row'>
        <input type="checkbox" onclick="setState()"></input><span className='quiz-answer-delete'>set correct answer</span>
        <a href='#' >save</a>
      </div>
      <Button variant='quiz-answer-button'>{answer}</Button>
    </div>
  );
}