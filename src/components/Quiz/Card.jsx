import React from 'react';
import { ReactComponent as QuizIcon} from './done_all-24px.svg';
import Question from './Question';
import Answer from './Answer';
import Message from './Message';
import Button from '../Button/Button';

export default function Card(props) {
  return (
    <Section>
      <QuizIcon />
      <Question />
      <Answer />
      <Message />
      <Button variant='submit'>SUBMIT</Button>
    </Section>
  );
}