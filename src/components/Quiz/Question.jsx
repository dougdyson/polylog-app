import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import NewAnswerIcon from '../NewIcon/NewIcon'


import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  const question = (size) ? props.question : 'Enter quiz question';

  const isLecturer = (size) ? props.lecturer : false;

  return (
      <div>
        <TextareaAutosize
          className='quiz-question'
          placeholder='Enter quiz question'  
          test_id='quiz-question'
          // value={question}
        />
        
        {(isLecturer)
          ? <NewAnswerIcon />
          : ''
        }
        
      </div>
  );
}