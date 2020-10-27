import React, { useState } from 'react';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import SettingsIcon from '../SettingsIcon/SettingsIcon';
import PlayIcon from '../PlayIcon/PlayIcon';
import './LectureCard.css';

import { useApplicationData } from 'hooks/useApplicationData';

const lectureCardTitle = "This is a Lecture Card Title"; 

function LectureCard(props) {

  const [lectureTitle, setLectureTitle] = useState(props.lectureTitle || lectureCardTitle);
  
  return (
    <section className="lecture-card">
      <div className="lecture-card-title">{lectureTitle}</div>
      <div className="lecture-card-details"></div> 
        <PlayIcon />
        <HistoryIcon />
        <SettingsIcon />
    </section>
  );
}

export default LectureCard;
