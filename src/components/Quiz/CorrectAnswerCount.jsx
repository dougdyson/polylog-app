import React from "react";

export default function CorrectAnswerTotal(props) {
	return (
		<div>
			<div className="quiz-answers-totals">Results</div>
			<div className="quiz-answers-correct-count">
				Correct: {props.answerCount || 0}
			</div>
		</div>
	);
}
