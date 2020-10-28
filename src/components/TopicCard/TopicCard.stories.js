import React from 'react';
import TopicCard from './TopicCard';

const topic_responses = {
  'id': '1',
  'type': 'question',
  'title': 'Really Long Topic Title With Big Fancy Words!',
  'description': 'Intrinsicly parallel task diverse architectures after prospective platforms. Holisticly customize sticky platforms before emerging testing procedures.',
  'reaction': true,
  'reactions_positive': 15,
  'reactions_negative': 4
}

export default {
  title: 'Topic Card',
  component: TopicCard
}

export const TopicCardExpanded = () => <TopicCard display='true' responses={topic_responses}/>
// export const TopicCardCollapsed = () => <TopicCard display='false' />