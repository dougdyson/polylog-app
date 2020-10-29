import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../Button/Button';

import './TopicResponse.css';
import question_icon from './question_icon.svg';
import comment_icon from './comment_icon.svg';

export default function DisplayTopicResponse (props) {

  console.log(props);
  
  // for clean up
  const response = props.topic_response.response;
  const student_name = props.topic_response.student_name;
  const timestamp = props.topic_response.timestamp;
  const variant = props.variant;

  // variant icons and styles
  let response_icon = '';
  if (variant === 'question') {
    response_icon = question_icon;
  } else {
    response_icon = comment_icon;
  }

  return (
    <section className="topic-response">

      <div className='topic_response_user'>
        {student_name + ' @ '}
        {' ' + timestamp}
        <img className="topic-response-icon" src={response_icon}></img>
      </div>
      
      <div className='topic_response_bubble'>
        <TextareaAutosize
          className='topic_response'
          placeholder='Enter question' 
          value={response}
        />
      </div>
  
      <div className="response-button">
        <Button className="reply">reply</Button>
        <Button className="submit">Submit</Button>
      </div>
    </section>
  )
}