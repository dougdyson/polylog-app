import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';


import './quiz.css';
import "fontsource-roboto";

export default function Question(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  let question = (size) ? props.question : 'Enter quiz question'

  return (
      <div className='quiz-question'>
        <TextareaAutosize
          placeholder='Topic Title'  
          test_id='topic-info-title'
          // value={question}
        />
      </div>
  );
}