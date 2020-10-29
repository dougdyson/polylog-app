import React from 'react';
import TopicCard from '../TopicCard/TopicCard';
import TopicResponse from '../TopicReponse/TopicResponse';
import AnswerResponse from '../AnswerReponse/AnswerResponse';

export default function TopicContainer(props) {

  return (
    <div>
      <TopicCard />
      <TopicResponse />
      <AnswerResponse />
    </div>
  );
  
}