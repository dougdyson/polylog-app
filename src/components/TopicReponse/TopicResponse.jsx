import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../Button/Button';

import './TopicResponse.css';
import question_icon from './question_icon.svg';
import comment_icon from './comment_icon.svg';
import "fontsource-roboto";

export default function DisplayTopicResponse (props) {

  
  // for clean up with state
  let response      = '';
  let student_name  = 'user name';
  let timestamp     = 'timestamp';
  let variant       = 'question';
  
  let size = Object.keys(props).length;
  if (size) {
    response      = props.topic_response.response;
    student_name  = props.topic_response.student_name;
    timestamp     = props.topic_response.timestamp;
    variant       = props.variant;
  }

  // variant icons and styles
  let response_icon = '';
  if (variant === 'question') {
    response_icon = question_icon;
  } else {
    response_icon = comment_icon;
  }

  return (
    <section className="topic-response">

      <div className='topic-response-row'>
        <div className='topic-response-bubble'>
          <TextareaAutosize
            className='topic-text-area'
            placeholder='Enter question' 
            value={response}
          />
        </div>
        <img className="topic-response-icon" src={response_icon}></img>
      </div>
      
      <div className='topic-response-row'>
        <div className="response-button">
          <Button className="reply">reply</Button>
          <div className='topic_response_user'>
            {student_name + ' @ '}
            {' ' + timestamp}
          </div>
          <Button className="submit">Submit</Button>
        </div>
      </div>
    </section>
  )
}