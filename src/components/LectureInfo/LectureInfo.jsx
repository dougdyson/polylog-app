import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '../Button/Button'
import NewIcon from '../NewIcon/NewIcon'

import './LectureInfo.css';
import '../../App.css';


export default function lecture (props) {
  // lecture controls only visible for lecturers

  // to clean up
  const variant = props.variant;
  const title = props.lecture_info.title;
  const description = props.lecture_info.description;

  // hooks
  
  // page layout
  return (
    <section className='lecture-info'>
        <TextareaAutosize 
          className='lecture-info-title'
          placeholder="Lecture Title"
          value={title}
        /> 
      <TextareaAutosize 
        className='lecture-info-description'
        placeholder="Lecture Description"
        value={description}
      />
      <div className={variant}> 
        <NewIcon new_class='icon icon-normal'/>
        <Button variant='card-mover'>∨</Button>
        <Button variant='card-mover'>∧</Button>
        top
      </div>
    </section>
  )
}