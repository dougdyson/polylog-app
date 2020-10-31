import React from "react";
import Answer from "./Answer";
import "./quiz.css";
import "fontsource-roboto";

export default function Question(props) {
	const quizAnswersList = props.answers.map(answer => {
		return (
			<Answer key={answer.id} answer={answer.answer} correct={answer.correct} />
		);
	});

	return (
		<div className="quiz-question">
			{props.question}
			{quizAnswersList}
		</div>
	);
}
