import React from "react";
import { ReactComponent as QuizIcon } from "./done_all-24px.svg";
import Question from "./Question";
import Answer from "./Answer";
import Message from "./Message";
import Button from "../Button/Button";
import CorrectAnswerCount from "./CorrectAnswerCount";
import IncorrectAnswerCount from "./IncorrectAnswerCount";

import "./quiz.css";
import "../Button/Button.css";

export default function Card(props) {
	const quizQuestionsList = props.questions.map(question => {
		return (
			<Question
				key={question.id}
				id={question.id}
				question={question.question}
				answers={question.answers}
				session={props.session}
			/>
		);
	});

	return (
		<section className="quiz-container">
			<div className="quiz-header-row">
				<div className="quiz-card-header">
					<QuizIcon className="quiz-header-icon" />
					<h2 className="quiz-header-title">Quiz</h2>
				</div>

				<a className="quiz-delete" href="">
					delete
				</a>
			</div>
			{quizQuestionsList}
			<div>
				{props.lecturer === props.user && props.session && (
					<div>
						{/* props.activity */}
						<CorrectAnswerCount />
						<IncorrectAnswerCount />
					</div>
				)}

				<div className="quiz-button">
					{props.lecturer === props.user ? (
						<Button variant="save-quiz">SAVE</Button>
					) : (
						<Button variant="submit">SUBMIT</Button>
					)}
				</div>
			</div>
		</section>
	);
}
