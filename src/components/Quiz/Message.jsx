import React from 'react';

function Message(props) {

  console.log(props);

   // initializel; replace with state
   let message = 'Make a selection above'
   const size = Object.keys(props).length;
 
   if (size) {
     message = props.message;
   }

  return (
    <div className='quiz-answer-message'>
      {message}
    </div>
  );
}

export default Message;