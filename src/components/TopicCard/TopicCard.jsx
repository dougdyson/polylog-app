import React from 'react';
import TopicInfo from '../TopicInfo/TopicInfo';
import TopicResponse from '../TopicReponse/TopicResponse';
import AnswerResponse from '../AnswerReponse/AnswerResponse';

import './TopicCard.css'

export default function TopicContainer(props) {

  return (
    <div className='topic-info-container'>
      <TopicInfo />
      <TopicResponse />
      <AnswerResponse />
    </div>
  );

}