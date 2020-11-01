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
        <div className='quiz-answer-correct-checkbox'>
          <input type="checkbox" onclick="setState()"></input>set correct answer
        </div>
        <div className='answer-save-delete'>
          <a href='#' >save</a>
        </div>
      </div>
      <Button variant='quiz-answer-button'>{answer}</Button>
    </div>
  );
}