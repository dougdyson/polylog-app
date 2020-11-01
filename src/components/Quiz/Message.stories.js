import React from 'react';
import Message from './Message';

const message = 'Please select an answer from above.';

export default {
  title: 'Quiz Message'
}

export const QuizMessage = () => <Message message={message} />
