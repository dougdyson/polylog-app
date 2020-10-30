import React from 'react';
import Nav from '../Nav/Nav';
import LectureCard from '../LectureCard/LectureCard'
import { ReactComponent as LecturerKeyArt } from './lecturer-key-art.svg';

import './Lectures.css'
// import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function Lectures () {

  return (
    <div>
      <Nav />
        <h2>Lectures</h2>
        <div className='lectures-container'>
          <div className='lectures-list'>
            <LectureCard />
          </div>
          <div className='lecturer-key-art'>
            <LecturerKeyArt />  
          </div>
        </div>
    </div>
  )
}