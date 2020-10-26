import React, { useState } from 'react';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import SettingsIcon from '../SettingsIcon/SettingsIcon';
import PlayIcon from '../PlayIcon/PlayIcon';
import './LectureCard.css';

const lectureCardTitle = "This is a Lecture Card Title"; //?

function LectureCard(props) {

  const [lectureTitle, setLectureTitle] = useState(props.lectureTitle || lectureCardTitle);
  
  return (
    <section className="lectureCard">
      <h2>{lectureTitle}</h2> 
      <PlayIcon />
      <HistoryIcon />
      <SettingsIcon />
    </section>
  );
}

export default LectureCard;
