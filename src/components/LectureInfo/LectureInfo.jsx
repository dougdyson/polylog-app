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

	// Check if there is an element before accessing .props
	const nextPosition = props.cardsList.length
		? props.cardsList[props.cardsList.length - 1].props.position + 1
		: 1;

	// Websockets doesn't update the value of title or description outside of state so the changes aren't reflected here
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

				{/* {props.lecturer === props.user && (
					<div className={"lecture-controls-visible"}>
						<NewIcon
							new_class="icon icon-normal"
							onNew={() =>
								props.onNew(props.lecture.id, null, null, nextPosition)
							}
						/>
						<Button variant="new-topic">New Topic</Button>
						<Button variant="new-quiz">New Quiz</Button>
					</div>
				)} */}
			</div>
		</section>
	);
}
