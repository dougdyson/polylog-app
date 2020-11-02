import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import NewIcon from '../NewIcon/NewIcon'


import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  const question = props.question || 'Enter quiz question';

  const isLecturer = props.lecturer || false;

  return (
      <div>
        <TextareaAutosize
          className='quiz-question'
          placeholder='Enter quiz question'  
          test_id='quiz-question'
          // value={question}
        />
        
        {isLecturer && <NewIcon />}
        
      </div>
  );
}