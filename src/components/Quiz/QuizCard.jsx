import React from 'react';
import { ReactComponent as QuizIcon} from './done_all-24px.svg'
import Question from './Question';
import Answer from './Answer';
import Message from './Message';
import Button from '../Button/Button';
import CorrectAnswerCount from './CorrectAnswerCount';
import IncorrectAnswerCount from './IncorrectAnswerCount';

import './quiz.css';
import '../Button/Button.css'

export default function Card(props) {

  // initialize; replace with state
  const size = Object.keys(props).length;

  const isLecturer = (size) ? props.lecturer : '0';


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
        <Answer />
        <Message />
        <div>
            {}
            <div className='quiz-answers-totals'>
              Results
            </div>
            <div className='quiz-answers-correct-count'>
              <CorrectAnswerCount />
            </div>
            <div className='quiz-answers-incorrect-count'>
              <IncorrectAnswerCount />
            </div>
        </div>
        <div className='quiz-button'>
          {
            // bug to fix: works when the condition is backwards, which is opposite of expected
            (props.user === props.lecturer)
              ? <Button variant='submit'>SUBMIT</Button>
              // save could make quiz visible too
              : <Button variant='save-quiz'>SAVE</Button> 
          }
        </div>
      </div>
    </section>
  );
}