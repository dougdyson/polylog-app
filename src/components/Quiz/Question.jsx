import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import NewAnswerIcon from "../NewIcon/NewIcon";
import Answer from "./Answer";
import Message from "./Message";
import "./quiz.css";
import "fontsource-roboto";

// Gonna need a hook to manage question here
// Also need to remove all this conditional stuff
export default function Question(props) {
	const quizAnswersList = props.answers.map(answer => {
		return (
			<Answer
				key={answer.id}
				id={answer.id}
				answer={answer.answer}
				correct={answer.correct}
				session={props.session}
			/>
		);
	});

	// initialize; replace with state
	const size = Object.keys(props).length;

	const question = size ? props.question : "Enter quiz question";

	const isLecturer = size ? props.lecturer : false;

	return (
		<div>
			<TextareaAutosize
				className="quiz-question"
				placeholder="Enter quiz question"
				test_id="quiz-question"
				value={props.question}
			/>

			{quizAnswersList}
			{isLecturer ? <NewAnswerIcon /> : ""}
		</div>
	);
}

{
	/* <Message /> */
}
