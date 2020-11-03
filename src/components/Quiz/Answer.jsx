import React from "react";
import Button from "../Button/Button";
import TextareaAutosize from "react-textarea-autosize";
import "./quiz.css";
import "fontsource-roboto";

export default function Answer(props) {
	const [answer, setAnswer] = React.useState(props.answer);
	const [buttonVariant, setButtonVariant] = React.useState(
		"quiz-answer-button"
	);

	const addResponse = () => {
		const findResponse = props.activity.find(
			response =>
				response.quiz_question_id === props.quiz_question_id &&
				response.student_id === props.user
		);

		console.log(!findResponse);
		if (!findResponse) {
			answer.correct
				? setButtonVariant("quiz-answer-correct")
				: setButtonVariant("quiz-answer-incorrect");
			props.onResponse(props.quiz_card_id, props.id, props.session, props.user);
		}
	};

	return (
		<div>
			{props.lecturer === props.user && (
				<TextareaAutosize
					className="quiz-answer-textarea"
					placeholder="Enter answer"
					value={answer.answer}
					onChange={event => {
						setAnswer({
							id: answer.id,
							quiz_question_id: answer.quiz_question_id,
							answer: event.target.value,
							correct: answer.correct
						});
						props.onAnswer.editQuizAnswer(
							answer.id,
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
							defaultChecked={answer.correct}
							onClick={() => {
								setAnswer({
									id: answer.id,
									quiz_question_id: answer.quiz_question_id,
									answer: answer.answer,
									correct: !answer.correct
								});
								props.onAnswer.editQuizAnswer(
									answer.id,
									answer.answer,
									!answer.correct
								);
							}}
						></input>
						set correct answer
					</div>
					<div className="answer-save-delete">
						<Button
							className="quiz-delete"
							onClick={() => props.onAnswer.deleteQuizAnswer(props.id)}
						>
							delete
						</Button>
					</div>
				</div>
			)}

			{props.lecturer !== props.user && (
				<Button variant={buttonVariant} onClick={addResponse}>
					{props.answer.answer}
				</Button>
			)}
		</div>
	);
}
