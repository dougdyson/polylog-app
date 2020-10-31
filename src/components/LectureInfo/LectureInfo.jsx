import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import Button from "../Button/Button";
import NewIcon from "../NewIcon/NewIcon";

import "./LectureInfo.css";
import "../../App.css";
import "fontsource-roboto";

export default function Lecture(props) {
	const [title, setTitle] = React.useState(props.lecture.title || "");
	const [description, setDescription] = React.useState(
		props.lecture.description || ""
	);
	// lecture controls only visible for lecturers

	// to clean up
	// let variant = "lecture-controls-visible";
	// let title = "";
	// let description = "";

	// let size = Object.keys(props).length;
	// if (size) {
	// 	variant = props.variant;
	// 	title = props.lecture_info.title;
	// 	description = props.lecture_info.description;
	// }

	// page layout
	return (
		<section className="lecture-container">
			{/* <div className='lectu' ><Button variant='close'>X</Button></div> */}
			<div className="lecture-info">
				<TextareaAutosize
					className="lecture-info-title"
					placeholder="Lecture Title"
					value={title}
					onChange={event => {
						setTitle(event.target.value);
						props.onEdit(props.lecture.id, event.target.value, description);
					}}
				/>
				<TextareaAutosize
					className="lecture-info-description"
					placeholder="Lecture Description"
					value={description}
					onChange={event => {
						setDescription(event.target.value);
						props.onEdit(props.lecture.id, title, event.target.value);
					}}
				/>
				<div className={"lecture-controls-visible"}>
					<NewIcon new_class="icon icon-normal" />
					<Button variant="card-mover">∨</Button>
					<Button variant="card-mover">∧</Button>
					<div className="lecture-goto-top">top</div>
				</div>
			</div>
		</section>
	);
}
