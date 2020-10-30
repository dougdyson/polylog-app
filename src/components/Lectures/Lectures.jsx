import React from 'react';
import Nav from '../Nav/Nav';
import LectureCard from '../LectureCard/LectureCard';
import NewIcon from '../NewIcon/NewIcon';
import { ReactComponent as LecturerKeyArt } from './lecturer-key-art.svg';

import "fontsource-roboto";
import './Lectures.css';
// import '../../App.css';

export default function Lectures () {

  return (
    <div>
      <Nav />
        <div className='lectures-page-header'>
          <NewIcon new_class="icon icon-large" />
          <h2 className='lectures-page-title'>Lectures</h2>
        </div>
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