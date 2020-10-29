import React from 'react';
import Nav from '../Nav/Nav';

import bg_yellow_bottom from './bg-yellow-bottom.svg';

export default function Lecture (props) {

  const message = props.content;

  return (
    <section>
      <Nav />
      <h1>{message}</h1>
    </section>
  )
}