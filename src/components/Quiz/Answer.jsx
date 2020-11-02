import React from 'react';
import Button from '../Button/Button';
import TextareaAutosize from 'react-textarea-autosize';


import './quiz.css';
import "fontsource-roboto";
// import { render } from '@testing-library/react';

export default function Answer(props) {

  console.log(props);
  
  // initialize; replace with state
  const size = Object.keys(props).length;

  const answer = props.answer || 'Select quiz answer';
  const isLecturer = props.lecturer || false;

  return (
    <div>
      {(isLecturer) && <TextareaAutosize className='quiz-answer-textarea' placeholder='Enter answer' /> }
      { (isLecturer) && (
      <div className='quiz-answer-settings-row'>
        <div className='quiz-answer-correct-checkbox'>
          <input type="checkbox" onclick="setState()"></input>set correct answer
        </div>
          <div className='answer-save-delete'>
            <a href='#'>delete</a>
          </div>
      </div>
        )}
      {(!isLecturer) && <Button variant='quiz-answer-button'>{answer}</Button>}
    </div>
  );
}