import React from 'react';
import './quiz.css'

export default function QuestionTitle(props) {

  const title = props.title || 'This is the question title'

  return (
    <div className='quiz-title'>
      {title}
    </div>
  );
}