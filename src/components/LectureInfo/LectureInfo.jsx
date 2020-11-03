import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./LectureInfo.css";
import "../../App.css";
import "fontsource-roboto";

export default function Lecture(props) {
	const [title, setTitle] = React.useState(props.lecture.title || "");
	const [description, setDescription] = React.useState(
		props.lecture.description || ""
	);

	// Websockets doesn't update the value of title or description outside of state so the changes aren't reflected here
	return (
		<section className="lecture-container">
			<div className="lecture-info">
				<TextareaAutosize
					className="lecture-info-title"
					placeholder="Lecture Title"
					value={title}
					onChange={event => {
						setTitle(event.target.value);
						props.onEdit(props.lecture.id, event.target.value, description);
					}}
					readOnly={props.lecturer !== props.user}
				/>
				<TextareaAutosize
					className="lecture-info-description"
					placeholder="Lecture Description"
					value={description}
					onChange={event => {
						setDescription(event.target.value);
						props.onEdit(props.lecture.id, title, event.target.value);
					}}
					readOnly={props.lecturer !== props.user}
				/>
			</div>
		</section>
	);
}
