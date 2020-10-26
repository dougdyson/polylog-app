import React from 'react';
import NewIcon from './NewIcon'

export default {
  title: 'New Icon',
  component: NewIcon
};

export const NewTopic = () => <NewIcon new_class="icon icon-lecture-card"/>
export const NewLecture = () => <NewIcon new_class="icon icon-large" />

