import React from 'react';
import { ReactComponent as QuizIcon } from './done_all-24px.svg';
import 'fontsource-roboto';

export default function QuizHeader(props) {
  return (
    <section className='quiz-header'>
      <div>
        <QuizIcon className='quiz-header-icon'/>
        <span className='quiz-header-title'>Quiz</span>
      </div>
      <div className='quiz-delete'>
        delete
      </div>
    </section>
  );
}