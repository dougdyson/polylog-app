import React from "react";

export default function IncorrectAnswerCount(props) {
	return (
		<div className="quiz-answers-incorrect-count">
			Incorrect: {props.answerCount}
		</div>
	);
}
