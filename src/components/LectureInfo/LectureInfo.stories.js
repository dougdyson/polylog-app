import React from 'react';
import LectureInfo from './LectureInfo';

export default {
  title: 'Lecture Info',
  component: LectureInfo
}

export const LectureControlsVisible = () => <LectureInfo variant='lecture-controls-display' />
export const LectureControlsInvisible = () => <LectureInfo variant='lecture-controls-hidden' />