import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '../Button/Button'
import NewIcon from '../NewIcon/NewIcon'

import './LectureInfo.css';
import '../../App.css';


const title = "Really Long Lecture Title With Big Fancy Words, Even Breaking Onto A New Line!";
const description = 'Compellingly visualize resource-leveling mindshare after 2.0 relationships. Distinctively coordinate competitive initiatives whereas emerging e-markets.';

export default function lecture (props) {

  // lecture controls only visible for lecturers
  const { variant = 'invisible', ...rest} = props

  // hooks

  
  // page layout
  return (
    <section className='lecture-info'>
        <TextareaAutosize 
          className='lecture-info-title'
          placeholder="Lecture Title"
        /> 
      <TextareaAutosize 
        className='lecture-info-description'
        placeholder="Lecture Description"
        description
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