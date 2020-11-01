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

  const isLecturer = (size) ? props.lecturer : true;

  return (
    <section className='quiz-container'>

      <div className='quiz-header-row'>
        <div className='quiz-card-header'>
          <QuizIcon className='quiz-header-icon' />
          <h2 className='quiz-header-title'>Quiz</h2>
        </div>
        
        { isLecturer && (
          <a className='quiz-delete' href='#'>delete</a>
        )}

      </div>
      <Question />
      <div>
        <Answer />
        <Message />
       
        { (isLecturer)
            ? <div>
                <CorrectAnswerCount />
                <IncorrectAnswerCount />
              </div>
            : ''
        }

        <div className='quiz-button'>
          { (isLecturer)
              ? <Button variant='submit'>SAVE</Button>
              // save could make quiz visible too
              : <Button variant='save-quiz'>SUBMIT</Button> 
          }
        </div>

      </div>
    </section>
  );
}