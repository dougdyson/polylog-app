import React from 'react';
import LectureCard from './LectureCard';

const title = "Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!";

export default {
  title: 'Lecture Card',
  component: LectureCard
}

export const LectureCardItem = () => <LectureCard title={title}/>




