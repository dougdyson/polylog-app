import React from 'react';
import Nav from '../Nav/Nav';

import './Lectures.css'
import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function lectures (props) {

  const message = props.content;

  return (
    <section>
      <div>
        <Nav />
        <h1>{message}</h1>
      </div>
    </section>
  )
}