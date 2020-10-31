import React from 'react';
import LectureInfo from './LectureInfo';

const lecture_info = {
  "title": "Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!",
  "description": 'Compellingly visualize resource-leveling mindshare after 2.0 relationships. Distinctively coordinate competitive initiatives whereas emerging e-markets.'
}

export default {
  title: 'Lecture Info',
  component: LectureInfo
}

export const LectureControlsVisible = () => <LectureInfo variant='lecture-controls-visible' lecture_info={lecture_info} />
export const LectureControlsInvisible = () => <LectureInfo variant='lecture-controls-hidden' lecture_info={lecture_info}/>