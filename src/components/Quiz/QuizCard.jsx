import React from "react";
import { ReactComponent as QuizIcon } from "./help_outline-24px.svg";
import Question from "./Question";
import QuizTitle from "./QuestionTitle";
import NewIcon from "../NewIcon/NewIcon";
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
				quiz_card_id={props.id}
				question={question.question}
				answers={question.answers}
				activity={props.activity}
				onQuestion={props.onQuestion}
				onAnswer={props.onAnswer}
				onResponse={props.onResponse}
				session={props.session}
				user={props.user}
				lecturer={props.lecturer}
			/>
		);
	});

	quizQuestionsList.sort((a, b) => {
		return a.key > b.key ? 1 : -1;
	});

	let correctAnswerCount = 0;
	let incorrectAnswerCount = 0;
	if (props.activity) {
		props.activity.forEach(answer => {
			answer.correct ? (correctAnswerCount += 1) : (incorrectAnswerCount += 1);
		});
	}

	return (
		<section className="quiz-container">
			<div className="quiz-header-row">
				<div className="quiz-card-header">
					<QuizIcon className="quiz-header-icon" />
					<h2 className="quiz-header-title">Quiz</h2>
				</div>

				{props.lecturer === props.user && (
					<Button
						className="quiz-delete"
						onClick={() => props.onDelete(props.id)}
					>
						delete
					</Button>
				)}
        
			</div>
			<QuizTitle
				id={props.id}
				title={props.title}
				onEdit={props.onEdit}
				position={props.position}
				user={props.user}
				lecturer={props.lecturer}
			/>
			{props.lecturer === props.user && (
				<NewIcon onNew={() => props.onQuestion.newQuizQuestion(props.id, "")} />
			)}
			{quizQuestionsList}
			<div>
				{props.lecturer === props.user && props.session && (
					<div>
						<CorrectAnswerCount answerCount={correctAnswerCount} />
						<IncorrectAnswerCount answerCount={incorrectAnswerCount} />
					</div>
				)}
			</div>
		</section>
	);
}
