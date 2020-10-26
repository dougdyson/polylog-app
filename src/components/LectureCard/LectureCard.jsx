import React, { useState } from 'react';
import HistoryIcon from '../HistoryIcon/HistoryIcon';
import SettingsIcon from '../SettingsIcon/SettingsIcon';
import './LectureCard.css';

const props = {lectureTitle: "This is a lecture card title"}; //?

function LectureCard(props) {

  const [lectureTitle, setLectureTitle] = useState(props.lectureTitle || null);
  // const [lectureDescription, setLectureDescription] = userState(props.lectureDescription || null);

  return (
    // <div>
      <section className="lectureCard">
        {/* <div className="lectureCardDetails"> */}
        <h2>This is a Lecture Card Title</h2>
        <p>20 Oct/2020 - 9:30am</p>
        <HistoryIcon />
        <SettingsIcon />
        {/* </div> */}
      </section>
    // </div>
  );
}

export default LectureCard;
