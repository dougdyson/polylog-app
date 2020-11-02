<<<<<<< HEAD
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import NewIcon from '../NewIcon/NewIcon'


import './quiz.css';
=======
import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewAnswerIcon from "../NewIcon/NewIcon";
import Answer from "./Answer";
import Message from "./Message";
import "./quiz.css";
>>>>>>> add-lectures-data
import "fontsource-roboto";

export default function Question(props) {
	const [question, setQuestion] = React.useState(props.question || "");

<<<<<<< HEAD
  const question = props.question || 'Enter quiz question';

  const isLecturer = props.lecturer || false;

  return (
      <div>
        <TextareaAutosize
          className='quiz-question'
          placeholder='Enter quiz question'  
          test_id='quiz-question'
          // value={question}
        />
        
        {isLecturer && <NewIcon />}
        
      </div>
  );
}
=======
	const quizAnswersList = props.answers.map(answer => {
		return (
			<Answer
				key={answer.id}
				id={answer.id}
				quiz_card_id={props.quiz_card_id}
				quiz_question_id={props.id}
				answer={answer}
				activity={props.activity}
				onAnswer={props.onAnswer}
				onResponse={props.onResponse}
				session={props.session}
				user={props.user}
				lecturer={props.lecturer}
			/>
		);
	});

	quizAnswersList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
	});

	return (
		<div>
			<TextareaAutosize
				className="quiz-question"
				placeholder="Enter quiz question"
				test_id="quiz-question"
				value={question}
				onChange={event => {
					setQuestion(event.target.value);
					props.onQuestion.editQuizQuestion(props.id, event.target.value);
				}}
				readOnly={props.lecturer !== props.user}
			/>

			{quizAnswersList}
			{props.lecturer === props.user && (
				<NewAnswerIcon
					onNew={() => props.onAnswer.newQuizAnswer(props.id, "", false)}
				/>
			)}
		</div>
	);
}
>>>>>>> add-lectures-data
