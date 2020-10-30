import React from "react";
import useVisualMode from "../../hooks/useVisualMode";
import PlayIcon from "../PlayIcon/PlayIcon";
import HistoryIcon from "../HistoryIcon/HistoryIcon";
import EditIcon from "../EditIcon/EditIcon";
import "./LectureCard.css";

function LectureCard(props) {
	// for clean up with state props
	// default text for now
	let title = "Lecture Title";
	// if props then assign
	let size = Object.keys(props).length;
	if (size) {
		title = props.title;
	}
	const SHOW = "SHOW";

	const { mode, transition, back } = useVisualMode(SHOW);

	return (
		<React.Fragment>
			<div className="lecture-card-title">{title}</div>
			{/* <div></div> */}
			<PlayIcon />
			<HistoryIcon />
			<EditIcon />
		</React.Fragment>
	);
}

export default LectureCard;
