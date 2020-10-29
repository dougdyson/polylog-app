import React from 'react';
import PlayIcon from '../PlayIcon/PlayIcon';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import EditIcon from '../EditIcon/EditIcon';

import './LectureCard.css';

// default text for now
let title = 'Lecture Title';


function LectureCard(props) {
  
  // if props then assign
  let size = Object.keys(props).length;
  if (size) {
    title = props.title;
  }
  
  return (
    <section className="lecture-card">
      <div className="lecture-card-title">{title}</div>
      {/* <div></div> */}
      <PlayIcon />
      <HistoryIcon />
      <EditIcon />
    </section>
  );
}

export default LectureCard;
