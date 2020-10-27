import React from 'react';
import NewIcon from '../NewIcon/NewIcon';
import VisibleIcon from '../VisibleIcon/VisibleIcon';
import VisibleOffIcon from '../VisibleOffIcon/VisibleOffIcon';
import ThumbsUpEmoji from '../ThumbsUpEmoji/ThumbsUpEmoji';
import ConfusedEmoji from '../ConfusedEmoji/ConfusedEmoji';

import '../../App.css';
import './TopicCard.css';

// hard coded variable for UI development until we hook stuff up
const lecture_owner = true;
const display = true;
const title="Javascript Fundamentals";
const description="Intrinsicly parallel task diverse architectures after prospective platforms. Holisticly customize sticky platforms before emerging testing procedures.";
const confused_count = 6;
const thumbs_up = 12;

// lecture controls only visible for lecturers
//  const { display = 'expanded', ...rest} = props;

export default function Topic (props) {

  return (
  
    <main className='topic-card'>
      <div className='topic-card-header'>
        <VisibleIcon />
        <h3 className='topic-card-title'>{title}</h3>
      </div>
      <p className='topic-card-description'>{description}</p>
      <hr/>
      <div className='emoji'>
        <ConfusedEmoji className='emoji-spacing' /> ({confused_count})
        <ThumbsUpEmoji className='emoji-spacing'/> ({thumbs_up})
        <div className='new_response_button'><NewIcon /></div>
      </div>
    </main>
  )

}

