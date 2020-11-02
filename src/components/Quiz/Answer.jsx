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

	// POST to /quiz/response doesn't keep track of quiz_question_id
	// I would need the db to return the quiz_question_id after insert
	// And I would need to websocket to insert it into state
	const addResponse = () => {
		const findResponse = props.activity.find(response => {
			return (
				response.quiz_question_id === props.quiz_question_id &&
				response.student_id === props.user
			);
		});

		findResponse === undefined && answer.correct
			? setButtonVariant("quiz-answer-correct")
			: setButtonVariant("quiz-answer-incorrect");
		props.onResponse(props.quiz_card_id, props.id, props.session, props.user);
	};

<<<<<<< HEAD
  const answer = props.answer || 'Select quiz answer';
  const isLecturer = props.lecturer || false;

  return (
    <div>
      {(isLecturer) && <TextareaAutosize className='quiz-answer-textarea' placeholder='Enter answer' /> }
      { (isLecturer) && (
      <div className='quiz-answer-settings-row'>
        <div className='quiz-answer-correct-checkbox'>
          <input type="checkbox" onclick="setState()"></input>set correct answer
        </div>
          <div className='answer-save-delete'>
            <a href='#'>delete</a>
          </div>
      </div>
        )}
      {(!isLecturer) && <Button variant='quiz-answer-button'>{answer}</Button>}
    </div>
  );
}
=======
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
				<Button variant={buttonVariant} onClick={addResponse}>
					{props.answer.answer}
				</Button>
			)}
		</div>
	);
}
>>>>>>> add-lectures-data
