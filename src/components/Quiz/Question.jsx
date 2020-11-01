import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  let question = (size) ? props.question : 'Enter quiz question'

  return (
      <div>
        <TextareaAutosize
          className='quiz-question'
          placeholder='Enter quiz question'  
          test_id='quiz-question'
          // value={question}
        />
      </div>
  );
}