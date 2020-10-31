import React from 'react';
import LectureInfo from '../LectureInfo/LectureInfo';
import TopicContainer from '../TopicCard/TopicCard';

import './ActivityFeed.css'


export default function ActivityFeed(props) {
  
  return (
    <div className='actitity-feed-container'>
      <LectureInfo />
      <TopicContainer />
    </div>
  );
}