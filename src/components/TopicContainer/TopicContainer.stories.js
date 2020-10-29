import React from 'react';
import TopicContainer from './TopicContainer';

// props data
const topic = {
  'id': '1',
  'title': 'Really Long Topic Title With Big Fancy Words!',
  'description': 'Intrinsicly parallel task diverse architectures after prospective platforms. Holisticly customize sticky platforms before emerging testing procedures.',
  'reaction': true,
  'reactions_positive': 15,
  'reactions_negative': 4
}
const topic_reponse =  {
  "topic_card_id": "1",
  "session_id": "1",
  "student_id": "1",
  "type": "question",
  "response": "This is a topic response",
  "student_name": "Janna Warden",  // <- need to get from ID
  "timestamp": "20 Oct 2020, 9:32am " // <- need to add to schema
}
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
  title: 'Topic Container',
  component: TopicContainer
}

export const Topic = () => <TopicContainer />
