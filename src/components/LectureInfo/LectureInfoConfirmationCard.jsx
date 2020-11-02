import React from 'react';
import Button from '../Button/Button';

import './LectureInfo.css';

export function LectureInfoConfirmationCard(props) {
  return (
    <div className='lecture-confirmation'>
      <div>
        Are you sure you want to end the lecture session?
      </div>
      <Button variant='submit'>CONFIRM</Button>
      <Button variant='submit'>CANCEL</Button>
    </div>
  );
}