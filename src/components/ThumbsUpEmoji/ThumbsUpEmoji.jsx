import React from 'react';
import thumbsUp from "./thumbs_up.png";
import './ThumbsUpEmoji.css';

function ThumbsUpEmoji() {
  return (
    <div>
      <img className="thumbs-up-emoji" src={thumbsUp}/>
    </div>
  )
}

export default ThumbsUpEmoji;