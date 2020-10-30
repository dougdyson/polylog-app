import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import NewIcon from '../NewIcon/NewIcon';
import VisibleIcon from '../VisibleIcon/VisibleIcon';
import VisibleOffIcon from '../VisibleOffIcon/VisibleOffIcon';
import ThumbsUpEmoji from '../ThumbsUpEmoji/ThumbsUpEmoji';
import ConfusedEmoji from '../ConfusedEmoji/ConfusedEmoji';

import '../../App.css';
import './TopicInfo.css';
import "fontsource-roboto";

export default function Topic (props) {
  
  // to clean up with state
  let reactions_positive  = 0;
  let reactions_negative  = 0;
  let title               = '';
  let description         = '';
  let display             = false;
  
  let size = Object.keys(props).length;
  if (size) {
    console.log(props);
    reactions_positive  = props.responses.reactions_positive;
    reactions_negative  = props.responses.reactions_negative;
    title               = props.responses.title;
    description         = props.responses.description;
    display             = props.description;
  }
  
  return (
    
    <main className='topic-info'>
      <div className='topic-info-header'>
        <VisibleIcon />
        <TextareaAutosize 
          // readOnly if not owner

          className='topic-info-title' 
          placeholder='Topic Title'  
          test_id='topic-info-title'
          value={title}
        />
      </div>
      <TextareaAutosize 
        //  readOnly if not owner
        
        className={`topic-info-description`}
        placeholder='Enter topic description...'
        test_id='topic_info_description'
        rows='3'
        value={description}
        style={{display: {display} ? 'flex' : 'none' }}
      />
      <hr className={`hr`}/>
      <div className={`emoji`}>
        
        {/* add onClick events for reactions */}
        <ConfusedEmoji className='icon emoji-spacing' /> ({reactions_negative})
        <ThumbsUpEmoji className='icon emoji-spacing'/> ({reactions_positive})

        {/* add onClick for new topic response */}
        <div className='new_response_button'><NewIcon /></div>
      </div>
    </main>
  )
}

