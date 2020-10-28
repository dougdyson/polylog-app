import React from 'react';
import NewIcon from '../NewIcon/NewIcon';
import TextareaAutosize from 'react-textarea-autosize';
import VisibleIcon from '../VisibleIcon/VisibleIcon';
import VisibleOffIcon from '../VisibleOffIcon/VisibleOffIcon';
import ThumbsUpEmoji from '../ThumbsUpEmoji/ThumbsUpEmoji';
import ConfusedEmoji from '../ConfusedEmoji/ConfusedEmoji';

import '../../App.css';
import './TopicCard.css';

// hard coded variable for UI development until we hook stuff up
const lecture_owner = true;
const display = true;
const title="Really Long Lecture Title With Big Fancy Words!";
const description="Intrinsicly parallel task diverse architectures after prospective platforms. Holisticly customize sticky platforms before emerging testing procedures.";
const confused_count = 0;
const thumbs_up = 0;

// lecture controls only visible for lecturers

export default function Topic (props) {
  
  const { display = true, ...rest} = props;

  console.log(display);

  return (
  
    <main className='topic-card'>
      <div className='topic-card-header'>
        <VisibleIcon />
        <TextareaAutosize 
          //  only owner can edit
          className='topic-card-title' 
          placeholder='Topic Title'  
          test_id='topic-card-title'
          // value={title} 
        />
      </div>
      <TextareaAutosize 
        //  only owner can edit
        className={`topic-card-description ${display}`}
        placeholder='Enter topic description...'
        test_id='topic_card_description'
        rows='3'
        // value={description}
        style={{display: {display} ? 'flex' : 'none' }}
      />
      <hr className={`hr ${display}`}/>
      <div className={`emoji ${display}`}>
        {/* onClick events for reactions */}
        <ConfusedEmoji className='emoji-spacing' /> ({confused_count})
        <ThumbsUpEmoji className='emoji-spacing'/> ({thumbs_up})
        <div className='new_response_button'><NewIcon /></div>
      </div>
    </main>
  )

}

