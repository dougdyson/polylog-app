import React from 'react';
import TopicCard from '../TopicCard/TopicCard';
import TopicResponse from '../TopicReponse/TopicResponse';
import AnswerResponse from '../AnswerReponse/AnswerResponse';

import './TopicContainer.css'

export default function TopicContainer(props) {

  return (
    <div className='topic-card-container'>
      <TopicCard />
      <TopicResponse />
      <AnswerResponse />
    </div>
  );

}