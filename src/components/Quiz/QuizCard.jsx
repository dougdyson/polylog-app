import React from 'react';
import QuizHeader from './QuizHeader'
import Question from './Question';
import Answer from './Answer';
import Message from './Message';
import Button from '../Button/Button';

import './quiz.css';
import '../Button/Button.css'

export default function Card(props) {
  return (
    <section className='quiz-container'>
      <QuizHeader />
      <Question />
      <div>
        {/* not selected */}
        <Answer /> 
        {/* selected */}
        <Answer />
        {/* correct */}
        <Answer />
        {/* incorrect */}
        <Answer />
        <Message />
        <div className='quiz-button'>
          <Button variant='submit'>SUBMIT</Button>
        </div>
      </div>
    </section>
  );
}