import React from 'react';
import Button from '../Button/Button';
import LectureInfo from '../LectureInfo/LectureInfo';
import TopicCard from '../TopicCard/TopicCard';
import { ReactComponent as ActivityFeedIcon } from './playlist_add_check-24px.svg';

import './ActivityFeed.css'


export default function ActivityFeed(props) {
  
  return (
    <div className='activity-feed-container'>
      <div className='activity-feed-card-header-row'>
        <div className='activity-feed-card-header'>
          <ActivityFeedIcon className='activity-feed-icon' />
          <h2 className='activity-feed-card-title'>Lecture Feed</h2>
        </div>
        <Button variant='close'>x</Button>
      </div>
      <LectureInfo />
      <div className='card-feed-container'>
        <TopicCard />
      </div>
    </div>
  );
}