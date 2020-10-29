import React from 'react';
import AnswerResponse from './AnswerResponse'

// hard coded until the big hook up
const answer =  {
  "topic_card_id": "1",
  "session_id": "1",
  "student_id": "2",
  "type": "answer",
  "response": "This is a response answer",
  "student_name": "Barbara Gordon",  // <- need to get from ID
  "timestamp": "20 Oct 2020, 9:34am " // <- need to add to schema
}

export default {
  title: 'Answer Response',
  component: AnswerResponse
}

export const Answer = () => <AnswerResponse answer={answer} />
