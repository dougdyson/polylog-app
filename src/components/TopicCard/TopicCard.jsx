import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import NewIcon from '../NewIcon/NewIcon';
import VisibleIcon from '../VisibleIcon/VisibleIcon';
import VisibleOffIcon from '../VisibleOffIcon/VisibleOffIcon';
import ThumbsUpEmoji from '../ThumbsUpEmoji/ThumbsUpEmoji';
import ConfusedEmoji from '../ConfusedEmoji/ConfusedEmoji';

import '../../App.css';
import './TopicCard.css';


// lecture controls only visible for lecturers

export default function Topic (props) {
  
  const reactions_positive = props.responses.reactions_positive;
  const reactions_negative = props.responses.reactions_negative;
  const title = props.responses.title;
  const description = props.responses.description;
  const display = props.description;

  console.log(props);

  return (
  
    <main className='topic-card'>
      <div className='topic-card-header'>
        <VisibleIcon />
        <TextareaAutosize 
          // readOnly if not owner

          className='topic-card-title' 
          placeholder='Topic Title'  
          test_id='topic-card-title'
          value={title}
        />
      </div>
      <TextareaAutosize 
        //  only owner can edit
        className={`topic-card-description ${display}`}
        placeholder='Enter topic description...'
        test_id='topic_card_description'
        rows='3'
        value={description}
        style={{display: {display} ? 'flex' : 'none' }}
      />
      <hr className={`hr ${display}`}/>
      <div className={`emoji ${display}`}>
        {/* onClick events for reactions */}
        <ConfusedEmoji className='icon emoji-spacing' /> ({reactions_negative})
        <ThumbsUpEmoji className='icon emoji-spacing'/> ({reactions_positive})
        <div className='new_response_button'><NewIcon /></div>
      </div>
    </main>
  )

}

