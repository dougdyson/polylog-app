import React from 'react';
import NewIcon from './NewIcon'

export default {
  title: 'New Icon',
  component: NewIcon
};

export const IconNormal = () => <NewIcon new_class="icon icon-normal"/>
export const IconLarge = () => <NewIcon new_class="icon icon-large" />

