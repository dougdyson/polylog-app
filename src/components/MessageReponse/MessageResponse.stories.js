import React from 'react';
import MessageResponse from './MessageResponse'

// hard coded until the big hook up
const message_reponse =  "This is topic response"; //?

export default {
  title: 'Message Response',
  component: MessageResponse
}

export const MessageBubble = () => <MessageResponse message={message_reponse} />