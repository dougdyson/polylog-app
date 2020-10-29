import React from 'react';
import TopicResponse from './TopicResponse'

// hard coded until the big hook up
const topic_reponse =  {
  "topic_card_id": "1",
  "session_id": "1",
  "student_id": "1",
  "type": "question",
  "response": "This is a topic response",
  "student_name": "Janna Warden",  // <- need to get from ID
  "timestamp": "20 Oct 2020, 9:32am " // <- need to add to schema
}

export default {
  title: 'Topic Response',
  component: TopicResponse
}

export const Question = () => <TopicResponse topic_response={topic_reponse} variant="question"/>
export const Comment = () => <TopicResponse topic_response={topic_reponse} variant="comment"/>