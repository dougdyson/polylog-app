import React from 'react';
import TopicCard from './TopicCard';

export default {
  title: 'Topic Card',
  component: TopicCard
}

export const TopicCardExpanded = () => <TopicCard display='expanded' />
export const TopicCardCollapsed = () => <TopicCard display='collapsed' />