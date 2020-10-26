import React from 'react';

export default {
  title: 'Settings Icon',
};

// assume image.png is located in the "public" directory.
export const withAnImage = () => (
  <img src="/assets/settings-24px.svg" alt="Settings" />
);
