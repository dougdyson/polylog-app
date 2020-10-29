import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../Button/Button';

import './AnswerResponse.css';
import answer_icon from './answer_icon.svg';

export default function DisplayAnswerResponse (props) {

  // for clean up with state
  let answer        = '';
  let student_name  = 'user name';
  let timestamp     = 'timestamp';
  
  let size = Object.keys(props).length;
  if (size) {
    answer        = props.answer.response;
    student_name  = props.answer.student_name;
    timestamp     = props.answer.timestamp;
  }

  return (
    <section className="answer-response">

      <div className='answer_response_user'>
        <img className="answer-response-icon" src={answer_icon}></img>
        {student_name + ' @ '}
        {' ' + timestamp}
      </div>
      
      <div className='answer_response_bubble'>
        <TextareaAutosize
          className='answer_response'
          placeholder='Enter answer' 
          // value={answer}
        />
      </div>
  
      <div className="answer_button">
        <Button className="submit">Submit</Button>
      </div>
    </section>
  )
}