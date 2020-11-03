import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./quiz.css";

export default function QuestionTitle(props) {
	const [title, setTitle] = React.useState(props.title || "");

	return (
		<TextareaAutosize
			className="quiz-title"
			placeholder={"Enter a Quiz Title"}
			value={title}
			onChange={event => {
				setTitle(event.target.value);
				props.onEdit(props.id, event.target.value, props.position);
			}}
			readOnly={props.lecturer !== props.user}
		/>
	);
}
