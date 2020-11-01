import React from 'react';
import { ReactComponent as QuizIcon} from './done_all-24px.svg'
import Question from './Question';
import Answer from './Answer';
import Message from './Message';
import Button from '../Button/Button';

import './quiz.css';
import '../Button/Button.css'

export default function Card(props) {
  return (
    <section className='quiz-container'>

      <div className='quiz-header-row'>
        <div className='quiz-card-header'>
          <QuizIcon className='quiz-header-icon' />
          <h2 className='quiz-header-title'>Quiz</h2>
        </div>
        <a className='quiz-delete' href='#'>delete</a>
      </div>
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