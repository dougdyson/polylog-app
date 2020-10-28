import React from 'react';
import PlayIcon from '../PlayIcon/PlayIcon';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import EditIcon from '../EditIcon/EditIcon';

import './LectureCard.css';

function LectureCard(props) {

  const title = props.title;
  
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
