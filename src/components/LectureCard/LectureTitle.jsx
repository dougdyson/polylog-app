import React from 'react';

export default function LectureTitle(props) {
  return (
    <div>
      <LectureTitle className="icon" onClick={props.onEdit} />
    </div>
  );
}

