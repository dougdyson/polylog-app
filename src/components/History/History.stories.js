import React from 'react';

import History from './History';

export default {
  title: 'History',
  component: History
}

let lectureHistory = {
  "title"               :'Getting started with Javascript',
  "startDate"           : '02 Oct 2020',
  "endDate"             : '31 Oct 2020',
  "lectureSessions"     : '16',
  "totalAttendees"      : '403',
  "avgAttendees"        : '25',
  "thumbsUps"           : '1045',
  "confused"            : '285',
  "questions"           : '634',
  "answers"             : '1203',
  "comments"            : '467',
  "quizzes"             : '67',
  "correctResponses"    : '82%',
  "incorrectResponses"  : '18%',
  "polls"               : '64'
}

export const SessionHistory = () => <History />
export const SampleReport = () => <History history={lectureHistory} />
