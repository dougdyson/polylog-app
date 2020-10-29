import React from 'react';
import Nav from '../Nav/Nav';
import LectureCard from '../LectureCard/LectureCard'

import './Lectures.css'
// import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function Lectures () {

  return (
    <div>
      <Nav />
      <h2>Lectures</h2>
      <LectureCard />
    </div>
  )
}