import React from "react";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import "./quiz.css";
import "fontsource-roboto";

export default function Answer(props) {
	const [answer, setAnswer] = React.useState(
		props.answer || { answer: "", correct: false }
	);

	return (
		<div>
			{props.lecturer === props.user && (
				<TextareaAutosize
					className="quiz-answer-textarea"
					placeholder="Enter answer"
					value={answer.answer}
					onChange={event => {
						setAnswer({ answer: event.target.value, correct: answer.correct });
						props.onAnswer.editQuizAnswer(
							props.answer.id,
							event.target.value,
							answer.correct
						);
					}}
				/>
			)}

			{props.lecturer === props.user && (
				<div className="quiz-answer-settings-row">
					<div className="quiz-answer-correct-checkbox">
						<input
							type="checkbox"
							onClick={() => {
								setAnswer({ answer: answer.answer, correct: !answer.correct });
								props.onAnswer.editQuizAnswer(
									props.answer.id,
									answer.answer,
									!answer.correct
								);
							}}
							checked={answer.correct}
						></input>
						set correct answer
					</div>
					<div className="answer-save-delete">
						<a href="#">save/delete</a>
					</div>
				</div>
			)}

			{props.lecturer !== props.user && (
				<Button variant="quiz-answer-button">{props.answer}</Button>
			)}
		</div>
	);
}
