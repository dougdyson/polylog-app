import React from 'react';
import TopicInfo from './TopicInfo';

const topic = {
  'id': '1',
  'type': 'question',
  'title': 'Really Long Topic Title With Big Fancy Words!',
  'description': 'Intrinsicly parallel task diverse architectures after prospective platforms. Holisticly customize sticky platforms before emerging testing procedures.',
  'reaction': true,
  'reactions_positive': 15,
  'reactions_negative': 4
}

export default {
  title: 'Topic Info',
  component: TopicInfo
}

export const TopicInfoExpanded = () => <TopicInfo responses={topic}/>
// export const TopicInfoCollapsed = () => <TopicInfo display='false' />