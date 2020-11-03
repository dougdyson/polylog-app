import React from 'react';
import { ReactComponent as LoadingHistory } from "./history-key-art.svg";

export default function Loading(props) {
  return (
    <div >
      <LoadingHistory className='history-key-art' />
    </div>
  );
}