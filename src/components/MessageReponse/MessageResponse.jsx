import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import './MessageResponse.css';

export default function DisplayTopicResponse (props) {
  
  const message_response = props.message;
  return (
    <section 
      className='message_response'>
      <TextareaAutosize 
        value={message_response} 
      />
    </section>
  )
}