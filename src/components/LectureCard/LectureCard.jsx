import React, { useState } from 'react';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import EditIcon from '../EditIcon/EditIcon';
import PlayIcon from '../PlayIcon/PlayIcon';
import './LectureCard.css';

// import { id, title, description } from '../../hooks/useLectureData';

const title = "Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!";


function LectureCard(props) {

  const [lecture, setLectures] = useState(title || null);
  
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
