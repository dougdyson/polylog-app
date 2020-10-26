import React from 'react';

export default {
  title: 'History Icon',
};

// assume image.png is located in the "public" directory.
export const withAnImage = () => (
  <img src="/assets/history-24px.svg" alt="History" />
);
