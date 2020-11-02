import React from 'react';
import './quiz.css'
import TextareaAutosize from 'react-textarea-autosize';

export default function QuestionTitle(props) {

  const title = props.title || 'This is the question title'

  return (
    <div className='quiz-title'>
      <TextareaAutosize className='quiz-answer-textarea'>{title}</TextareaAutosize>
    </div>
  );
}