import React from 'react';
import Question from './Question';

const question = 'This is multiple choice question.  Choose wisely!';

export default {
  title: 'Quiz Question'
}

export const QuizQuestion = () => <Question question={question} />
