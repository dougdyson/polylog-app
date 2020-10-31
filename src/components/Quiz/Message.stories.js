import React from 'react';
import Message from './Message';

const message = 'Please select an answer from above!';

export default {
  title: 'Initial Quiz Message'
}

export const QuizMessage = () => <Message message={message} />
